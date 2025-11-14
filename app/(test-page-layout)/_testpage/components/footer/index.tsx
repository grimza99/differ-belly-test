import Image from "next/image";
import FamilySiteSelector from "./FamilySiteSelector";

const FOOTER_SPANS = [
  { label: "(주)야놀자리서치", key: "company-name" },
  { label: "대표이사.유선향", key: "ceo-name" },
  {
    label: "사업자등록번호. 000-00-00000",
    key: "business-registration-number",
  },
  { label: "Y-Siren (Compliance/Whistleblowing)", key: "y-siren" },
  { label: "E-mail. yanoljaresearch@yanolja.com", key: "email" },
  { label: "서울특별시 강남구 테헤란로 108길 42 MDM타워 4층", key: "address" },
];

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-black px-[26px] pt-9 pb-[65px] flex lg:pt-[52px] lg:px-22 lg:pb-[95px] flex-col gap-10 lg:flex-row lg:justify-between">
      <section className="flex flex-col gap-4">
        <Image src="/logo_white.svg" alt="logo-white" width={143} height={24} />
        <div className="footer_description white-space-pre-line">
          <h3>개인정보 처리방침</h3>
          <div>
            {FOOTER_SPANS.slice(0, 3).map((span) => (
              <span key={span.key}>{span.label}</span>
            ))}
          </div>
          <div>
            {FOOTER_SPANS.slice(3, 5).map((span) => (
              <span
                key={span.key}
                style={span.key === "y-siren" ? { color: "#ffd800" } : {}}
              >
                {span.label}
              </span>
            ))}
          </div>
          <div>
            {FOOTER_SPANS.slice(5, 6).map((span) => (
              <span key={span.key}>{span.label}</span>
            ))}
          </div>
          <p className="text-white mt-2.5">
            © YANOLJA RESEARCH. All rights reserved.
          </p>
        </div>
      </section>
      <FamilySiteSelector />
    </footer>
  );
}
