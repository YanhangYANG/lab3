import type { AxiosInstance, AxiosResponse } from "axios"
import type { EventItem } from "@/type"
import axios from "axios";

const apiClient: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3004',
    // 其他的配置项
});

export default {
    getEvent(): Promise<AxiosResponse<EventItem[]>> {
        return apiClient.get < EventItem[] > ('/events')
    },
    getEventById(id: number): Promise<AxiosResponse<EventItem>> {
        return apiClient.get < EventItem > ('/events/' + id.toString())
    }
}