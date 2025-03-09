import React from 'react'

const commentsData = [
  {
    name: "UserName",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "UserName",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "UserName",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "UserName",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "UserName",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "UserName",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "UserName",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "UserName",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "UserName",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "UserName",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "UserName",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "UserName",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "UserName",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="data:image/png;base64,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"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  // Disclaimer: Don't use indexes as keys
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
