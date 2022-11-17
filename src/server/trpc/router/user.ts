import { router, publicProcedure } from "../trpc";
import { z } from "zod";
import { DgraphGraphqlRequestClient } from "../../../clints/GQLDgraphGraphqlClient";
import { getSdk } from "../../../generated/DgraphServerGraphql";

export const userRouter = router({
  getUserProfile: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ input }) => {
      const data = await getSdk(DgraphGraphqlRequestClient).getUserProfile({
        id: `${input.userId}`,
      });
      return {
        profile: data,
      };
    }),
});
