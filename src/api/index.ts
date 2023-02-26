import { request } from "./request";

export async function ask(params: { prompt: string }) {
  return request('/aibox.v1.ChatGPTService/Ask', params);
}