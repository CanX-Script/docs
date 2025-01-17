import { Footer, Layout, Link, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";
import { FaStore } from "react-icons/fa6";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});
export const metadata = {
    title: "CanX Scripts",
    description: "CanX Scripts Documentation",
};

const banner = (
    <Banner storageKey="some-key">New documentation just released 🎉</Banner>
);
const navbar = (
    <Navbar
        logo={
            <div className="flex items-center gap-x-2">
                <Image
                    width={30}
                    height={30}
                    src={"/logo.png"}
                    alt="Canx logo"
                />
                CanX Scripts
            </div>
        }
        chatLink="https://discord.gg/h4rdNKnEM6"
        projectLink="https://github.com/canx-script"
        children={
            <>
                <Link href="https://canx.tebex.io" className="text-white">
                    <FaStore className="text-2xl" />
                </Link>
            </>
        }
    />
);
const footer = <Footer>{new Date().getFullYear()} © CanX Scripts</Footer>;

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            // Not required, but good for SEO
            lang="en"
            // Required to be set
            dir="ltr"
            // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
            suppressHydrationWarning
        >
            <Head

            // ... Your additional head options
            ></Head>
            <body className={inter.className}>
                <Layout
                    banner={banner}
                    navbar={navbar}
                    pageMap={await getPageMap()}
                    docsRepositoryBase="https://github.com/canx-script/docs"
                    footer={footer}
                    nextThemes={{
                        defaultTheme: "dark",
                    }}
                    feedback={{
                        content: null,
                    }}
                    editLink={null}

                    // ... Your additional layout options
                >
                    {children}
                </Layout>
            </body>
        </html>
    );
}
