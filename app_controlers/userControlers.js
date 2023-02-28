const { response } = require('express')

const conecte = async () => {
   if (global.conetion && global.conetion.state != 'disconect') return global.conetion
   const mysql = require('mysql2/promise')
   conex = mysql.createConnection("mysql://root:ThomDev031222@localhost:3306/anymals")
   global.conetion = conex
   return conex
}

const showAnymal = async () => {
   const conex = await conecte()
   const [coluna] = await conex.query('select * from user')
   return await coluna

}

const insertAnymal = async (client) => {
   conex = await conecte()
   const sql = 'insert into user (onwer,mail,size,weight,sex,color,especie) values (?,?,?,?,?,?,?)'
   const insertValues = [client.onwer, client.mail, client.size, client.weight, client.sex, client.color, client.especie]
   await conex.query(sql, insertValues)
   console.log(client.onwer + ' client successfully created')
}

const updateAnymal = async (id, cliente) => {
   const conex = await conecte()
   const sql = 'UPDATE user SET onwer=?,mail=?,size=?,weight=?,sex=?,color=?,especie=? WHERE id=?'
   const updateValues = [client.onwer, client.mail, client.size, client.weight, client.sex, client.color, client.especie, id]
   await conex.query(sql, updateValues)
   console.log(Client.onwer + ' client update successfully')

}

const deleteAnymal = async (id) => {
   const conex = await conecte()

   try {
      const sql = 'delete from user where id=? '
      const idAnymal = [id]
      console.log('User id ' + id + ' successfully deleted')
      await conex.query(sql, idAnymal)

   } catch (error) {
      return response.json({error:'not found'})
   }
}

   module.exports = { showAnymal, insertAnymal, updateAnymal, deleteAnymal } 