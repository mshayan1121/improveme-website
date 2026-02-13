import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  async redirects() {
    const courseToCurriculum: Array<[string, string]> = [
      // Primary
      ["/courses/eyfs-mathematics", "/curriculum/primary/eyfs/mathematics"],
      ["/courses/eyfs-english", "/curriculum/primary/eyfs/english"],
      ["/courses/ks1-mathematics", "/curriculum/primary/ks1/mathematics"],
      ["/courses/ks1-english", "/curriculum/primary/ks1/english"],
      ["/courses/ks1-science", "/curriculum/primary/ks1/science"],
      ["/courses/ks2-mathematics", "/curriculum/primary/ks2/mathematics"],
      ["/courses/ks2-english", "/curriculum/primary/ks2/english"],
      ["/courses/ks2-science", "/curriculum/primary/ks2/science"],
      // KS3
      ["/courses/ks3-mathematics", "/curriculum/secondary/ks3/mathematics"],
      ["/courses/ks3-english", "/curriculum/secondary/ks3/english"],
      ["/courses/ks3-science", "/curriculum/secondary/ks3/science"],
      // GCSE
      ["/courses/gcse-mathematics", "/curriculum/secondary/gcse/mathematics"],
      ["/courses/gcse-english-language", "/curriculum/secondary/gcse/english-language"],
      ["/courses/gcse-physics", "/curriculum/secondary/gcse/physics"],
      ["/courses/gcse-chemistry", "/curriculum/secondary/gcse/chemistry"],
      ["/courses/gcse-biology", "/curriculum/secondary/gcse/biology"],
      ["/courses/gcse-business-studies", "/curriculum/secondary/gcse/business-studies"],
      ["/courses/gcse-economics", "/curriculum/secondary/gcse/economics"],
      ["/courses/gcse-psychology", "/curriculum/secondary/gcse/psychology"],
      // IGCSE
      ["/courses/igcse-mathematics", "/curriculum/secondary/igcse/mathematics"],
      ["/courses/igcse-english-language", "/curriculum/secondary/igcse/english-language"],
      ["/courses/igcse-physics", "/curriculum/secondary/igcse/physics"],
      ["/courses/igcse-chemistry", "/curriculum/secondary/igcse/chemistry"],
      ["/courses/igcse-biology", "/curriculum/secondary/igcse/biology"],
      ["/courses/igcse-business-studies", "/curriculum/secondary/igcse/business-studies"],
      ["/courses/igcse-economics", "/curriculum/secondary/igcse/economics"],
      ["/courses/igcse-psychology", "/curriculum/secondary/igcse/psychology"],
      // MYP
      ["/courses/myp-mathematics", "/curriculum/secondary/myp/mathematics"],
      ["/courses/myp-english", "/curriculum/secondary/myp/english"],
      ["/courses/myp-sciences", "/curriculum/secondary/myp/sciences"],
      ["/courses/myp-individuals-societies", "/curriculum/secondary/myp/individuals-societies"],
      // A-Level
      ["/courses/a-level-mathematics", "/curriculum/secondary/a-level/mathematics"],
      ["/courses/a-level-english-literature", "/curriculum/secondary/a-level/english-literature"],
      ["/courses/a-level-physics", "/curriculum/secondary/a-level/physics"],
      ["/courses/a-level-chemistry", "/curriculum/secondary/a-level/chemistry"],
      ["/courses/a-level-biology", "/curriculum/secondary/a-level/biology"],
      ["/courses/a-level-business", "/curriculum/secondary/a-level/business"],
      ["/courses/a-level-economics", "/curriculum/secondary/a-level/economics"],
      ["/courses/a-level-psychology", "/curriculum/secondary/a-level/psychology"],
      // IB
      ["/courses/ib-mathematics", "/curriculum/secondary/ib/mathematics"],
      ["/courses/ib-english", "/curriculum/secondary/ib/english"],
      ["/courses/ib-physics", "/curriculum/secondary/ib/physics"],
      ["/courses/ib-chemistry", "/curriculum/secondary/ib/chemistry"],
      ["/courses/ib-biology", "/curriculum/secondary/ib/biology"],
      ["/courses/ib-business-management", "/curriculum/secondary/ib/business-management"],
      ["/courses/ib-economics", "/curriculum/secondary/ib/economics"],
      ["/courses/ib-psychology", "/curriculum/secondary/ib/psychology"],
    ];
    return [
      { source: "/curriculum/primary/mathematics", destination: "/curriculum/primary/ks2/mathematics", permanent: true },
      { source: "/curriculum/primary/english", destination: "/curriculum/primary/ks2/english", permanent: true },
      { source: "/curriculum/primary/science", destination: "/curriculum/primary/ks2/science", permanent: true },
      ...courseToCurriculum.map(([source, destination]) => ({ source, destination, permanent: true })),
    ];
  },
  turbopack: {
    // Point Turbopack at the actual project root (where `node_modules` lives).
    // Setting this explicitly avoids incorrect inference (e.g. `src/app`).
    root: path.resolve(__dirname).replace(/\\/g, "/"),
  },
};

export default nextConfig;
