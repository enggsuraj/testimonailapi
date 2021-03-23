## testimonialapi

Tired of copy and pasting lorem user's testimonial text which doesn't give the feel of authenticity, don't worry try testimonial API to get dummy testimonial data that includes user id, name, location, designation, avatar, message and rating .

Contain upto 10 users data, simple use a GET HTTP request on the link. Individual of one data can be fetch using respective ID.

![Badges-Embeds-Product-Hunt](https://user-images.githubusercontent.com/6918020/110662722-c78aeb80-81eb-11eb-981b-2900c8fa21aa.png)

![response_api](https://user-images.githubusercontent.com/6918020/112142398-8d164b00-8bfc-11eb-8f3b-dda07287bce0.png)

## Get Single user testimonial

Based on ID from 1 to 10 get a particular user data. Note here odd ID are male person testimonial data while even ID are female testimonial data. Below is exmaple of fetching the first user data.

![one](https://user-images.githubusercontent.com/6918020/112142476-a8815600-8bfc-11eb-92e1-3ec5ed57ec44.png)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
