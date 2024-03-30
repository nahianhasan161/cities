import ActionCard from "@/components/Card/actionCard";
import { appStoreLink, playStoreLink } from "@/helpers/socialLinks";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export interface IActionCardSectionProps {}

export default function ActionCardSection(props: IActionCardSectionProps) {
  const localActive = useLocale();
  const t = useTranslations("actionCards");
  const join = useTranslations("join_now");

  return (
    <section className="flex flex-nowrap flex-col justify-center items-center gap-[10px] my-[120px] text-[#ededed] bg-[#ededed]">
      <div className="flex flex-nowrap flex-col justify-center items-center gap-[100px] py-[120px]">
        {/* card1 */}

        <ActionCard
          title={t("card1_title")}
          description={t("card1_description")}
          imageUrl="/card/travel.webp"
          containerClassName={localActive == "ar" ? "xl:flex-row-reverse" : ""}
        />
        <div className="flex items-center flex-col justify-center gap-6">
          <h1 className="font-bold text-2xl xl:text-[32px] xl:leading-[38px] leading-[29px] text-[#333333]">
            {join("title")}
          </h1>
          <div className="flex items-center gap-4">
            <Link
              href={playStoreLink}
              className="cursor-pointer hover:scale-[102%] transition-all ease-in-out "
            >
              <Image
                src="/images/google-play-badge.svg"
                alt="playStore"
                height={53}
                width={180}
                className="xl:w-[180px] xl:h-[53px]  w-[135px] h-[40px]"
              />
            </Link>
            <Link
              href={appStoreLink}
              className="cursor-pointer hover:scale-[102%] transition-all ease-in-out"
            >
              <Image
                src="/images/appstore.svg"
                alt="appStore"
                height={53}
                width={180}
                className="xl:w-[180px] xl:h-[53px]  w-[135px] h-[40px]"
              />
            </Link>
          </div>
        </div>
        <ActionCard
          title={t("card2_title")}
          description={t("card2_description")}
          imageUrl="/card/shopping.webp"
          containerClassName={localActive == "ar" ? "" : "xl:flex-row-reverse"}
        />
        {/* card2 */}
        {/* <div className="flex flex-col flex-nowrap gap-[30px] justify-center w-[286px] ">
          <div className="relative overflow-hidden rounded-[20px] w-[280px] h-[250px]">
            <Image
              src={"/card/shopping.webp"}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-[20px]"
              priority={true}
              quality={100}
              loading="eager"
              unoptimized={true}
              alt="shopping_request"
            />
          </div>

          
          <div className="flex flex-col flex-nowrap gap-[10px] ">
            <h2 className=" font-semibold tracking-[-.7px] leading-[1.5em] text-[#001122]">
              On Demand Marketplace
            </h2>
            <h3 className=" leading-6 tracking-[-0.6px] text-[#888888]">
              Explore our marketplace where travelers share unique global finds.
              Like something? They’ll deliver it straight to your doorstep.
            </h3>
          </div>
        </div> */}
      </div>
    </section>
  );
}
