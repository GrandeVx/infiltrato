import { z } from "zod";

import { createTRPCRouter, publicProcedure , privateProcedure} from "@/server/api/trpc";

export const userProcedure = createTRPCRouter({
    getUser : privateProcedure
        .input(z.object({
            id : z.string(),
        }))
        .query(({ ctx }) => {
        return ctx.prisma.user.findMany(
            {
                select : {
                    id : true,
                    domain : true,
                    province : true,
                    city : true,
                    subs : true,
                    messages : true,
                    comments : true,
                },

                where : {
                    id : ctx.currentUser,
                }
        });
    }),

});