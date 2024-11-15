import Head from "next/head";

import ContactForm from "@/components/contact/contact-form";

function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta
          name="description"
          content="Send me your messages and I will respond as soon as possible."
        />
      </Head>
      <ContactForm />
    </>
  );
}

export default ContactPage;
