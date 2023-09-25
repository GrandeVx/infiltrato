import { getAuth } from '@clerk/nextjs/server';
import { authMiddleware } from "@clerk/nextjs";
import { api } from './utils/api';

export default authMiddleware({
    publicRoutes: ["/","/api/trpc/example.hello"],
});


export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};