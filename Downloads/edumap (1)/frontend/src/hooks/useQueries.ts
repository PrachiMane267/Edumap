import { useQuery, useMutation } from "@tanstack/react-query";

// 🔥 Fetch colleges from your Node backend
export function useGetColleges() {
  return useQuery({
    queryKey: ["colleges"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/api/colleges");
      if (!res.ok) throw new Error("Failed to fetch");
      return res.json();
    },
  });
}

// 🔥 Chatbot (simple fallback)
export function useAskChatBot() {
  return useMutation({
    mutationFn: async (question: string) => {
      return {
        text: "This is a demo response. Backend chatbot not connected.",
      };
    },
  });
}