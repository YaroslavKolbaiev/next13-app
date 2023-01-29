import React from 'react';

type Props = {
  params: {
    slug: string;
  };
};

export default function Head({ params: { slug } }: Props) {
  return (
    <>
      <title>{slug}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={`Post about ${slug}`} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
