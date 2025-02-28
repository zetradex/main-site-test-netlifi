import { NextRequest, NextFetchEvent, NextResponse } from "next/server";
import { getName } from "country-list";


export async function middleware(request: NextRequest) {
  const host = request.headers.get("host"); // Получаем хост из заголовка запроса

  // Игнорируем перенаправление, если приложение работает локально
  if (host?.includes("localhost") || host?.includes("127.0.0.1")) {
    const res = NextResponse.next();

    const countryCode = request.geo?.country ?? "undefinedUserCountryCode";
    const countryName = getName(countryCode);
    const countryNameEncoded = encodeURI(countryName as string);

    const city = encodeURI(request.geo?.city ?? "undefinedUserCity");
    let ip = request.ip ?? request.headers.get("x-real-ip");
    const forwardedFor = request.headers.get("x-forwarded-for");
    if (!ip && forwardedFor) {
      ip = forwardedFor.split(",").at(0) ?? "Unknown";
    }

    res.headers.set("X-CountryCode", countryCode);
    res.headers.set("X-CountryName", countryNameEncoded as string);
    //res.headers.set("X-CountryPhoneCode", countryPhoneCode as string);
    res.headers.set("X-City", city);
    res.headers.set("X-IP", ip as string);

    // Установка кук с кодом страны
    res.cookies.set('countryCode', countryCode);

    return res;
  }

  const countryCode = request.geo?.country ?? "undefinedUserCountryCode";
  const url = request.nextUrl.clone();
  // Логика перенаправления в зависимости от страны
  if (countryCode === "ID" && host?.endsWith("zetradex.com")) {
    url.hostname = host.replace("zetradex.com", "zetradex.id");
    return NextResponse.redirect(url, 308);
  }
  if (countryCode !== "ID" && host?.endsWith("zetradex.id")) {
    url.hostname = host.replace("zetradex.id", "zetradex.com");
    return NextResponse.redirect(url, 308);
  }

  // Создаем ответ, если не выполняется перенаправление
  const res = NextResponse.next();
  const countryName = getName(countryCode);
  const countryNameEncoded = encodeURI(countryName as string);
  const city = encodeURI(request.geo?.city ?? "undefinedUserCity");
  let ip = request.ip || request.headers.get("x-real-ip") || "null";

  res.headers.set("X-CountryCode", countryCode);
  res.headers.set("X-CountryName", countryNameEncoded as string);
  res.headers.set("X-City", city);
  res.headers.set("X-IP", ip as string);

  return res;
}


//const RESTRICTED_COUNTRIES = ["PH", "US"];

/*export async function middleware(request: NextRequest, _next: NextFetchEvent) {
  const res = NextResponse.next();

  const countryCode = request.geo?.country ?? "undefinedUserCountryCode";
  const countryName = getName(countryCode);
  const city = request.geo?.city ?? "undefinedUserCity";
  let ip = request.ip ?? request.headers.get("x-real-ip");
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (!ip && forwardedFor) {
    ip = forwardedFor.split(",").at(0) ?? "Unknown";
  }

  res.headers.set("X-CountryCode", countryCode);
  res.headers.set("X-CountryName", countryName as string);
  //res.headers.set("X-CountryPhoneCode", countryPhoneCode as string);
  res.headers.set("X-City", city);
  res.headers.set("X-IP", ip as string);

  /!*  if (RESTRICTED_COUNTRIES.includes(country)) {
    return NextResponse.rewrite(new URL("/restricted", request.url));
  }*!/

  return res;
}*/

/*
import { NextRequest, NextFetchEvent, NextResponse } from "next/server";
import { getName } from "country-list";

export async function middleware(request: NextRequest, _next: NextFetchEvent) {
  const res = NextResponse.next();

  const countryCode = request.geo?.country ?? "undefinedUserCountryCode";
  const countryName = getName(countryCode) ?? "Russia";
  const city = request.geo?.city ?? "undefinedUserCity";
  let ip = request.ip ?? request.headers.get("x-real-ip");
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (!ip && forwardedFor) {
    ip = forwardedFor.split(",").at(0) ?? "Unknown";
  }

  res.headers.set("X-CountryCode", countryCode);
  res.headers.set("X-CountryName", countryName as string);
  res.headers.set("X-City", city ?? "St Petersburg");
  res.headers.set("X-IP", (ip as string) ?? "91.122.158.151");

  return res;
}
*/
