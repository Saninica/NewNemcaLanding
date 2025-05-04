import { create } from "zustand";
import { ContentStore } from "../types/home";
import axios from "axios";


export const useHomeStore = create<ContentStore>((set) => ({
    pageContents: undefined,
    pageContentError: false,
    pageContentLoading: false,
    getPageContents: async (website_id: number = 0, language_code: string = "TR")  => {
        set({ pageContentLoading: true });
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/website/all-info/${website_id}/${language_code}/`,
                { headers: { 'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzdHJpbmciLCJleHAiOjE3MzgxNTYzMTF9.0uSu6PIMtMF546IWPA7g5JmhUlJMo4-Gv_XRXATSK5s' } });

            const data = await response.data;

            set({ pageContents: data, pageContentLoading: false });
        } catch (error) {
            set({ pageContentError: true, pageContentLoading: false });
        }
    }
}));