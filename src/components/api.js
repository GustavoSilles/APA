export const getComments = async () => {
  return [
    {
      id: "1",
      body: "Primeiro comentario, e o Gustavo é viado!",
      username: "Gustavo",
      userId: "1",
      parentId: null,
      createdAt: "2005-03-11T23:00:33.010+02:00",
    },
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "Gustavo",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
