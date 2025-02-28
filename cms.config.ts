import process from "process";

const configCms: any = {
  api:
    process.env.NEXT_PUBLIC_API_URL_LOCAL ||
    process.env.NEXT_PUBLIC_API_URL_PROD,
  src:
    process.env.NEXT_PUBLIC_API_CMS_LOCAL ||
    process.env.NEXT_PUBLIC_API_CMS_PROD,
};

export default configCms;

export const configCmsNew: any = {
  api:
    process.env.NEXT_PUBLIC_API_URL_NEW_PROD ||
    process.env.NEXT_PUBLIC_API_URL_LOCAL,
};
