import { GoogleSpreadsheet } from 'google-spreadsheet'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

export default async (req, res) => {

  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: process.env.SHEET_PRIVATE_KEY
    })
    await doc.loadInfo()

    const sheet = doc.sheetsByIndex[2]
    await sheet.loadCells('A3:B3')
    const cellCheck = sheet.getCell(2, 0)

    const cellDescription = sheet.getCell(2, 1)

    res.end(JSON.stringify({
      //VERDADEIRO equals TRUE in portuguese
      showCoupon: cellCheck.value,
      message: cellDescription.value,
    }))

  } catch (err) {
    res.end(JSON.stringify({
      showCoupon: false,
      message: '',
    }))
  }
}