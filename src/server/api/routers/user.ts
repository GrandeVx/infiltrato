import { z } from "zod";
import { clerkClient } from "@clerk/nextjs";
import { TRPCError } from "@trpc/server";
import {
  createTRPCRouter,
  publicProcedure,
  privateProcedure,
} from "@/server/api/trpc";

export const userProcedure = createTRPCRouter({

    getAllUsers: publicProcedure.query(async ({ ctx }) => {
        return await ctx.prisma.user.findMany({
        select: {
            id: true,
            domain: true,
            province: true,
            city: true,
        },
        });
    }),

    getUser: privateProcedure.query(async ({ ctx }) => {
        const user = await ctx.prisma.user.findMany({
        select: {
            id: true,
            domain: true,
            province: true,
            city: true,
            subs: true,
            messages: true,
            comments: true,
        },

        where: {
            id: ctx.currentUser,
        },
        });
        return user[0];
    }),

    createUser: privateProcedure.input(
        z.object({
            domain: z.string(),
            province: z.string(),
            city: z.string(),
            name: z.string(),
            surname: z.string(),
        }),
    ).mutation(async ({ ctx, input }) => {

        const user = await ctx.prisma.user.create({
          data: {
            name: input.name,
            surname: input.surname,
            authId: ctx.currentUser,
            domain: input.domain,
            province: input.province,
            city: input.city,
          },
        }).catch((err) => {
            throw new TRPCError({
                code: "BAD_REQUEST",
                message: err.message,
            });
            }
        );

      return user;
    }),

    

    });
