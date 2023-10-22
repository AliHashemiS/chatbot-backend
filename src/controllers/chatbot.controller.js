import { getConnection, querys, sql } from '../database'

export const getAllQuestionsAndAnswers = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.getAllQuestionsAndAnswers);
        return res.json(result.recordsets[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const getQuestionsByQuestion = async (req, res) => {
    const { question } = req.body;
    if (question == null) {
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }

    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("question", question)
            .query(querys.getQuestionsByQuestion);
        return res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const createNewQuestionAndAnswer = async (req, res) => {
    const { question, answer, languagename } = req.body;

    // validating
    if (question == null || answer == null || languagename == null) {
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }

    try {
        const pool = await getConnection();

        await pool
            .request()
            .input("question", sql.Text, question)
            .input("answer", sql.Text, answer)
            .input("languagename", sql.VarChar, languagename)
            .query(querys.createNewQuestionAndAnswer);

        res.json({ question, answer, languagename });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const deleteQuestionAndAnswerById = async (req, res) => {
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("id", req.params.id)
            .query(querys.deleteQuestionAndAnswerById);

        if (result.rowsAffected[0] === 0) return res.sendStatus(404);

        return res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const updateQuestionAndAnswerById = async (req, res) => {
    const { question, answer, languagename } = req.body;

    // validating
    if (question == null || answer == null || languagename == null) {
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }

    try {
        const pool = await getConnection();
        await pool
            .request()
            .input("question", sql.Text, question)
            .input("answer", sql.Text, answer)
            .input("languagename", sql.VarChar, languagename)
            .input("id", req.params.id)
            .query(querys.updateQuestionAndAnswerById);
        res.json({ question, answer, languagename });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};