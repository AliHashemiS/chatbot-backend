export const querys = {
    getAllQuestionsAndAnswers: "SELECT TOP(50) * FROM [chatbot].[dbo].[QuestionsAndAnswers]",
    getQuestionsByQuestion: "SELECT Question, Answer, LanguageName FROM [chatbot].[dbo].[QuestionsAndAnswers] WHERE CHARINDEX(@question, LOWER(CONVERT(NVARCHAR(MAX), Question))) > 0;",
    createNewQuestionAndAnswer: "INSERT INTO [chatbot].[dbo].[QuestionsAndAnswers] (question, answer, languagename) VALUES (@question, @answer, @languagename);",
    deleteQuestionAndAnswerById: "DELETE FROM [chatbot].[dbo].[QuestionsAndAnswers] WHERE Id= @Id",
    updateQuestionAndAnswerById: "UPDATE [chatbot].[dbo].[QuestionsAndAnswers] SET Question = @question, Answer = @answer, LanguageName = @languagename WHERE Id = @id",
};