import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export async function GET(request: Request) {
  return new ImageResponse(
    (
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle cx="30" cy="30" r="4" fill="black" />
        <circle cx="70" cy="30" r="4" fill="black" />
        <path d="M 30 50 Q 50 60 70 50" stroke="black" stroke-width="5" fill="none" />
      </svg>
    ),
    {
      width: 100,
      height: 100,
    },
  );
}