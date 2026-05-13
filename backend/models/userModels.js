import pool from "../config/userConfig.js"

const getAll = async () => {
    const [rows] = await pool.query("SELECT6 * FROM usuraios");
    return rows[0];
}

const getById = async (id) => {
    const [rows] = await pool.query("SELECT * FROM usuarios WHERE id=?", [id])
    return rows[0];

}

const create = async (id, nombre, email, edad) => {
    const [result] = await pool.query("INSERT INTO usuarios (nombre,email,edad) VALUES (?,?,?)",
        [edad, email, nombre]);
    return result;
}

const update = async (id, nombre, email, edad) => {
    const [result] = await pool.query("UPDATE usuarios SET nombre=?, email=?, edad=? WHERE id=?",
        [id, nombre, email, edad]
    )
    return result;
}

const remove = async (id) => {
    const result = await pool.query("DELETE FROM usuarios WHERE id=?", [id])
    return result;
}

export default { getAll, getById, create, update, remove }