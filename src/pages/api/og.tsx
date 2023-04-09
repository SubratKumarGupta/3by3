import { ImageResponse } from "@vercel/og";
import * as z from "zod";

import { NextApiRequest } from "next";

export const config = {
  runtime: "experimental-edge",
};

//http://localhost:3000/api/og?size=8&images=http%3A%2F%2Flocalhost%3A3000%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fs4.anilist.co%252Ffile%252Fanilistcdn%252Fmedia%252Fanime%252Fcover%252Flarge%252Fbx21519-XIr3PeczUjjF.png%26w%3D1920%26q%3D100%2Chttp%3A%2F%2Flocalhost%3A3000%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fs4.anilist.co%252Ffile%252Fanilistcdn%252Fmedia%252Fanime%252Fcover%252Flarge%252Fbx21519-XIr3PeczUjjF.png%26w%3D1920%26q%3D100%2Chttp%3A%2F%2Flocalhost%3A3000%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fs4.anilist.co%252Ffile%252Fanilistcdn%252Fmedia%252Fanime%252Fcover%252Flarge%252Fbx21519-XIr3PeczUjjF.png%26w%3D1920%26q%3D100%2Chttp%3A%2F%2Flocalhost%3A3000%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fs4.anilist.co%252Ffile%252Fanilistcdn%252Fmedia%252Fanime%252Fcover%252Flarge%252Fbx21519-XIr3PeczUjjF.png%26w%3D1920%26q%3D100%2Chttp%3A%2F%2Flocalhost%3A3000%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fs4.anilist.co%252Ffile%252Fanilistcdn%252Fmedia%252Fanime%252Fcover%252Flarge%252Fbx21519-XIr3PeczUjjF.png%26w%3D1920%26q%3D100%2Chttp%3A%2F%2Flocalhost%3A3000%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fs4.anilist.co%252Ffile%252Fanilistcdn%252Fmedia%252Fanime%252Fcover%252Flarge%252Fbx21519-XIr3PeczUjjF.png%26w%3D1920%26q%3D100%2Chttp%3A%2F%2Flocalhost%3A3000%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fs4.anilist.co%252Ffile%252Fanilistcdn%252Fmedia%252Fanime%252Fcover%252Flarge%252Fbx21519-XIr3PeczUjjF.png%26w%3D1920%26q%3D100%2Chttp%3A%2F%2Flocalhost%3A3000%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fs4.anilist.co%252Ffile%252Fanilistcdn%252Fmedia%252Fanime%252Fcover%252Flarge%252Fbx21519-XIr3PeczUjjF.png%26w%3D1920%26q%3D100%2Chttp%3A%2F%2Flocalhost%3A3000%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fs4.anilist.co%252Ffile%252Fanilistcdn%252Fmedia%252Fanime%252Fcover%252Flarge%252Fbx21519-XIr3PeczUjjF.png%26w%3D1920%26q%3D100

//https://3by3-881th86f9-subratkumargupta.vercel.app/api/og?size=8&images=http%3A%2F%2Flocalhost%3A3000%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fs4.anilist.co%252Ffile%252Fanilistcdn%252Fmedia%252Fanime%252Fcover%252Flarge%252Fbx21519-XIr3PeczUjjF.png%26w%3D1920%26q%3D100%2Chttp%3A%2F%2Flocalhost%3A3000%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fs4.anilist.co%252Ffile%252Fanilistcdn%252Fmedia%252Fanime%252Fcover%252Flarge%252Fbx21519-XIr3PeczUjjF.png%26w%3D1920%26q%3D100%2Chttp%3A%2F%2Flocalhost%3A3000%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fs4.anilist.co%252Ffile%252Fanilistcdn%252Fmedia%252Fanime%252Fcover%252Flarge%252Fbx21519-XIr3PeczUjjF.png%26w%3D1920%26q%3D100%2Chttp%3A%2F%2Flocalhost%3A3000%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fs4.anilist.co%252Ffile%252Fanilistcdn%252Fmedia%252Fanime%252Fcover%252Flarge%252Fbx21519-XIr3PeczUjjF.png%26w%3D1920%26q%3D100%2Chttp%3A%2F%2Flocalhost%3A3000%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fs4.anilist.co%252Ffile%252Fanilistcdn%252Fmedia%252Fanime%252Fcover%252Flarge%252Fbx21519-XIr3PeczUjjF.png%26w%3D1920%26q%3D100%2Chttp%3A%2F%2Flocalhost%3A3000%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fs4.anilist.co%252Ffile%252Fanilistcdn%252Fmedia%252Fanime%252Fcover%252Flarge%252Fbx21519-XIr3PeczUjjF.png%26w%3D1920%26q%3D100%2Chttp%3A%2F%2Flocalhost%3A3000%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fs4.anilist.co%252Ffile%252Fanilistcdn%252Fmedia%252Fanime%252Fcover%252Flarge%252Fbx21519-XIr3PeczUjjF.png%26w%3D1920%26q%3D100%2Chttp%3A%2F%2Flocalhost%3A3000%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fs4.anilist.co%252Ffile%252Fanilistcdn%252Fmedia%252Fanime%252Fcover%252Flarge%252Fbx21519-XIr3PeczUjjF.png%26w%3D1920%26q%3D100%2Chttp%3A%2F%2Flocalhost%3A3000%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fs4.anilist.co%252Ffile%252Fanilistcdn%252Fmedia%252Fanime%252Fcover%252Flarge%252Fbx21519-XIr3PeczUjjF.png%26w%3D1920%26q%3D100

const searchParamsSchema = z.object({
  images: z.array(z.string().url()).length(9),
  size: z.number().int().min(5).max(24),
});

export default function handler(req: NextApiRequest) {
  if (req.url === undefined) {
    return;
  }

  const { searchParams } = new URL(req.url);
  const imageArray = JSON.parse(searchParams.get("images")!);
  const Result = searchParamsSchema.safeParse({
    size: searchParams.get("size") ? parseInt(searchParams.get("size")!) : null,
    images: imageArray ? imageArray : null,
  });
  if (Result.success === false) {
    return new Response(
      JSON.stringify({
        error: Result.error,
        input: {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          size: searchParams.get("size")
            ? parseInt(searchParams.get("size")!)
            : null,
          images: imageArray,
        },
      }),
      {
        status: 400,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  }
  const gap = Result.data.size / 3;
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000a18",
          marginTop: "auto",
          marginBottom: "auto",
        }}
      >
        {Result.data.images.map((url, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#000a18",
              padding: `${gap}px`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // width: "100%",
              // maxWidth: "300px",
            }}
          >
            <img
              key={index}
              src={url}
              alt={`Image ${index}`}
              style={{
                backgroundColor: "#000a18",
                width: `${
                  (Result.data.size * 100) / 3 - gap /**padding value */ * 3
                }px`,
                height: `${
                  (Result.data.size * 100) / 3 - gap /**padding value */ * 2
                }px`,
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>
    ),
    {
      width: 100 * Result.data.size,
      height: 100 * Result.data.size,
    }
  );
}
