const express = require("express");
const app = express();

app.post("/add-passenger", (req, res) => {
  let tren = req.body;
  console.log(tren);
  const trenName = req.body.Tren.Ad;
  let RezervasyonYapilabilir = false;
  let YerlesimAyrinti = [];
  let rezervasyon = {};
  const vagon = req.body.Tren.vagon;
  const vagonlar = req.body.Tren.Vagonlar;
  const RezervasyonYapilacakKisiSayisi =
    req.body.Tren.RezervasyonYapilacakKisiSayisi;
  const KisilerFarkliVagonlaraYerlestirilebilir =
    req.body.Tren.KisilerFarkliVagonlaraYerlestirilebilir;
  let vagonIndex = vagonlar.findIndex(item => item.Ad === vagon);

  if (
    vagonlar[vagonIndex].Kapasite * 0.7 > vagonlar[vagonIndex].DoluKoltukAdet &&
    vagonlar[vagonIndex].Kapasite >
      vagonlar[vagonIndex].DoluKoltukAdet +
        parseInt(RezervasyonYapilacakKisiSayisi)
  ) {
    RezervasyonYapilabilir = true;
    rezervasyon = {
      VagonAdi: vagonlar[vagonIndex].Ad,
      KisiSayısı: RezervasyonYapilacakKisiSayisi
    };
    YerlesimAyrinti.push(rezervasyon);
  } else {
    if (KisilerFarkliVagonlaraYerlestirilebilir == "true") {
      let toplamBosKoltukSayisi = 0;
      let toplam = 0;
      let toplamRezerveKisiSayisi = RezervasyonYapilacakKisiSayisi;
      vagonlar.forEach(item => {
        toplamBosKoltukSayisi = item.Kapasite - item.DoluKoltukAdet;
        if (toplamBosKoltukSayisi > 0 && toplamRezerveKisiSayisi > 0) {
          toplam = toplamBosKoltukSayisi;
          if (toplam > toplamRezerveKisiSayisi) {
            rezervasyon = {
              VagonAdi: item.Ad,
              KisiSayısı: toplamRezerveKisiSayisi
            };
          } else {
            rezervasyon = {
              VagonAdi: item.Ad,
              KisiSayısı: toplam
            };
          }

          YerlesimAyrinti.push(rezervasyon);

          toplamRezerveKisiSayisi = toplamRezerveKisiSayisi - toplam;
        }
      });
      RezervasyonYapilabilir = true;
    } else {
      RezervasyonYapilabilir = false;
    }
  }

  res.status(200).json({
    RezervasyonYapilabilir: RezervasyonYapilabilir,
    YerlesimAyrinti
  });
});
module.exports = {
  path: "/api",
  handler: app
};
