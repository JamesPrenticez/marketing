import React, { useState } from "react";
import Image from "next/image";
import moment from "moment";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

function Campaign({ details }) {
  const {
    query: { slug },
  } = useRouter();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  //console.log(details)

  const handleSubmit = (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      body: JSON.stringify({
        email: email,
        campaign: details.id,
      }),
      headers: {
        "content-Type": "application/json",
      },
    };
    setIsSubmitting(true);
    fetch(`http://127.0.0.1:8000/api/subscribe`, options)
      .then((res) => res.json())
      .then((res) => console.log("response", res), setIsSubmitted(true))
      .catch((err) => console.log(err))
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  return (
    <>
      <Head>
        <title>Campaign Manager | {details.title}</title>
        <meta name="description" content={details.description}></meta>
      </Head>
      {/* background */}
      <div className="fixed h-screen w-full overflow-hidden bg-[url('/laptop.jpeg')] bg-no-repeat bg-center bg-cover">
        <div className="absolute top-0 h-full w-full  bg-[#001101]/80"></div>
      </div>

      <div className="absolute flex flex-wrap lg:flex-nowrap xl:justify-between w-full cursor-pointer px-[4rem] py-[4rem] xl:px-[32rem] xl:py-[10rem]">
        <div className="w-full">
          <div className="p-8">
            <div className="mb-4">
              <Image
                className="rounded-full"
                height={120}
                width={120}
                src={"https://res.cloudinary.com/prenticez/" + details.logo}
                alt="logo"
              />
            </div>
            <h2>{details.title}</h2>
            <p>{details.description}</p>
            <small>
              {moment(details.created_at).format("DD MMM YYYY")} at{" "}
              {moment(details.created_at).format("h:mma")}
            </small>
          </div>
        </div>

        {!isSubmitted ? (
          <form
            className="mr-auto p-8 space-y-4 w-full lg:mt-[150px] text-black"
            onSubmit={handleSubmit}
          >
            <input
              className="w-full p-4"
              type="email"
              placeholder="Email Address"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="flex justify-center w-full p-4 bg-blue-600 hover:bg-blue-500 rounded-md text-white cursor-pointer"
              type="submit"
              value={isSubmitting ? "PLEASE WATI" : "SUBSCRIBE"}
              disabled={isSubmitting}
            />
            <small className="text-gray-400">We respect your privacy</small>
          </form>
        ) : (
          <div className="flex justify-center items-center w-full lg:mt-[150px] mr-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-16 w-16 text-green-600"
              viewBox="0 0 20 20"
              fill="currentColor"
              >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
                />
            </svg>
            <h2>Thank you for subscribing</h2>
          </div>
        )}
      </div>

      <footer className="absolute bottom-0 left-0 flex justify-center p-8 w-full text-white border-t-2 border-white bg-[#001101]">
        <Link href="/">
          <a className="text-xl">Go back to list</a>
        </Link>
      </footer>
    </>
  );
}

export default Campaign;

export async function getStaticProps({ params }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/campaigns/${params.slug}`
  );
  let details = await response.json();
  return {
    props: {
      details,
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/campaigns`
  );
  let data = await response.json();

  const allSlugs = data.map((item) => item.slug);
  const paths = allSlugs.map((slug) => ({ params: { slug: slug } }));

  return {
    paths,
    fallback: false, //only updates when you re-build
  };
}
