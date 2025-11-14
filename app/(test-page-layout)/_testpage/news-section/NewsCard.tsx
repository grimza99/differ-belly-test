import { TContentType } from ".";

interface NewsCardProps {
  contentType: TContentType;
}
export default function NewsCard({ contentType }: NewsCardProps) {
  return (
    <li className="flex justify-between w-full gap-4">
      <p className="flex-2 mb-3">
        [{contentType}] 뉴스 제목... 뉴스 제목이 길어질 경우를 대비한 예시
        문장입니다.
      </p>
      <span className="w-fit whitespace-nowrap text-xs text-gray600">
        2025.11.15
      </span>
    </li>
  );
}
