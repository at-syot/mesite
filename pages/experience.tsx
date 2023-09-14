import { ReactElement } from "react";
import Layout from "../src/components/layout";

export default function Experience() {
  return (
    <main className="flex flex-col">
      <aside className="flex flex-row gap-4 text-[14px]">
        <div className="flex flex-col items-end font-bold basis-[110px] shrink-0">
          <p>Year</p>
          <p>At</p>
          <p>City, Country</p>
        </div>

        <div className="flex flex-col items-start gap-2">
          <h4 className="font-bold">JOB Position</h4>
          <p>
            Describe Suscipit nihil vel labore fugiat. Temporibus molestiae
            autem omnis maiores est.
          </p>
        </div>
      </aside>
    </main>
  );
}

Experience.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="EXPERIENCE" gradientCls="from-[#FAFDFF] to-[#C5F2E6]">
      {page}
    </Layout>
  );
};
