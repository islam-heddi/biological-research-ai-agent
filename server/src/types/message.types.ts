
type MessageType = {
    _id?: string;
    content: string;
    role: "user" | "system";
    userId: any;
    channelId: any;
}

type ChannelType = {
    _id?: string;
    userId: string;
    name: string;
}

export {
    MessageType,
    ChannelType
}