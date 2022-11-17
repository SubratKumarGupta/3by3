import { router, publicProcedure } from "../trpc";
import { z } from "zod";
import { DgraphGraphqlRequestClient } from "../../../clints/GQLDgraphGraphqlClient";
import { getSdk } from "../../../generated/DgraphServerGraphql";
import { TRPCError } from "@trpc/server";

export const userRouter = router({
  getUserProfile: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ input }) => {
      const data = await getSdk(DgraphGraphqlRequestClient).getUserProfile({
        id: `${input.userId}`,
      });
      if (data.getUser !== null) {
        return {
          profile: data,
        };
      } else {
        const err: TRPCError = {
          name: "TRPCError",
          code: "BAD_REQUEST",
          message: "no User with this name found",
        };
        throw new TRPCError(err);
      }
    }),
});
