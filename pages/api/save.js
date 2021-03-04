import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

const genCoupon = () => {
  const code = parseInt(moment().format('YYMMDDhhmmssSSS')).toString(16).toUpperCase()
  return `${code.substr(0, 4)}-${code.substr(4, 4)}-${code.substr(8, 4)}`
}

export default async (req, res) => {

  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: process.env.SHEET_PRIVATE_KEY
    })
    await doc.loadInfo()

    const sheet = doc.sheetsByIndex[1]
    const data = JSON.parse(req.body)

    const sheetConfig = doc.sheetsByIndex[2]
    await sheetConfig.loadCells('A3:B3')

    const cellCheck = sheetConfig.getCell(2, 0)
    const cellDescription = sheetConfig.getCell(2, 1)

    let Coupon = ''
    let Promotion = ''

    if(cellCheck.value){
      Coupon = genCoupon()
      Promotion = cellDescription.value
    }

    await sheet.addRow({
      Name: data.Name,
      Email: data.Email,
      Phone: data.Phone,
      Rating: data.Rating,
      Date: moment().format('MM/DD/YYYY, hh:mm:ss a'),
      Coupon,
      Promotion,
    })

    res.end(JSON.stringify({
      showCoupon: Coupon !== '',
      Coupon,
      Promotion
    }))

  } catch (err) {
    res.end('error')
  }
}