export const prepareUserConversations = (
  users: any[],
  conversations: any[],
) => {
  // Map user with chat conversation
  const items = users.map((user: any) => {
    const conversation = conversations.find((conv: any) => {
      return conv.participantsDetails.some(
        (pt: any) => pt.__userId === user.user_id,
      );
    });

    return {
      ...user,
      conversationId: conversation ? conversation._id : '',
      lastMessage: conversation ? conversation.lastMessage : null,
      countUnreadMessages: conversation ? conversation.countUnreadMessages : 0,
    };
  });

  // Order by latest message create at desc if no message will order by name
  return items.sort((a, b) => {
    if (a.lastMessage === null && b.lastMessage === null) {
      return a.name.localeCompare(b.name);
    } else if (a.lastMessage === null) {
      return 1;
    } else if (b.lastMessage === null) {
      return -1;
    } else {
      return (
        new Date(b.lastMessage.createdAt).getTime() -
        new Date(a.lastMessage.createdAt).getTime()
      );
    }
  });
};
