import { getAuth } from '@clerk/nextjs/server';
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ["/","/api/trpc/example.hello"]
});


export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};