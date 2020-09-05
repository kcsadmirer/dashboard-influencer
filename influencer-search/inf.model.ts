export class InfModel {
    constructor(
        public id: string,
        public user_id: string,
        public social_id: string,
        public social_name: string,
        public platform: string,
        public influencer_store_link: string,
        public platform_access_token: string,
        public app_access_token: string,
        public followers: number,
        public engagement: number,
        public avg_likes: number,
        public avg_comments: number,
        public avg_video_view_count: number,
        public number_of_post: number,
        public status: string,
        public created_at: string,
        public updated_at: string,
        public deleted_at: string,
        public user_details: {
            id: number,
            username: string,
            name: string,
            contact: number,
            whatsapp_contact: string,
            email: string,
            image: string,
            address_line_1: string,
            address_line_2: string,
            city: string,
            state: string,
            country: string,
            age: number,
            contact_id: string,
            total_earning: number,
            wallet_amount: number,
            withdrawal_amount: number,
            device: string,
            gender: string,
            phone_model: string,
            account_status: string,
            created_at: string,
            last_login: string,
            deleted_at: string,
            updated_at: string
        },
        public languages: string[],
        public professions: string[],
        public interests: string[]
    ) { }
}