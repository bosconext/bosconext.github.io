<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>チーム＆選手プロフィール｜BOSCO NEXT</title>
<meta name="description" content="BOSCO NEXT（ボスコ ネクスト）の選手・スタッフ紹介。東京近辺で活動するソーシャルフットボールのクラブチームです。">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Dela+Gothic+One&family=Zen+Kaku+Gothic+New:wght@400;500;700;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>
<body>

<header id="site-header"></header>
<nav class="mobile-menu" id="mobileMenu"></nav>

<section class="subhero">
  <div class="wrap subhero-inner">
    <div class="breadcrumb"><a href="index.html">ホーム</a> ／ チーム＆選手</div>
    <span class="kicker">Team &amp; Players</span>
    <h1>チーム＆選手プロフィール</h1>
    <p>ピッチで闘うメンバーと、チームを支えるスタッフを紹介します。</p>
  </div>
</section>

<section class="block">
  <div class="wrap">
    <div class="lead-block reveal" id="teamLead"></div>
  </div>
</section>

<section class="block" style="padding-top:0">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="kicker">Players</span>
      <h2 class="sec-title">選手</h2>
      <p class="sec-lead">背番号・お名前・ポジションを並べています。</p>
    </div>
    <div class="roster-grid reveal" id="roster"></div>
  </div>
</section>

<section class="block" style="padding-top:0">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="kicker">Staff</span>
      <h2 class="sec-title">スタッフ</h2>
    </div>
    <div class="staff-grid reveal" id="staff"></div>
  </div>
</section>

<section class="cta-band">
  <div class="wrap">
    <h2>一緒に闘う仲間を募集中</h2>
    <p>プレイヤー・マネージャー・サポーター歓迎。見学・体験だけでも大丈夫です。</p>
    <div class="hero-cta">
      <a class="btn btn-primary" data-link="join">⚽ 体験・入部のお問い合わせ</a>
      <a class="btn btn-ghost" data-link="contact">お問い合わせ</a>
    </div>
  </div>
</section>

<footer id="site-footer"></footer>
<button class="to-top" id="toTop" aria-label="上に戻る">↑</button>

<script src="site.js"></script>
<script>
/* =====================================================================
   ★★★ このページの内容はここを編集します ★★★
   ・選手を追加 → players の { } をコピーして増やす
   ・スタッフを追加 → staff の { } をコピーして増やす
   ・写真を入れたいときは photo に画像URLを入れる（空 "" なら背番号を表示）
   ===================================================================== */
const PAGE = {
  lead: [
    "BOSCO NEXTは、精神障がいのある方を中心に、誰もがフットサルを楽しみ、本気で勝利を目指すチームです。",
    "※ 下のプロフィールはサンプルです。実際の選手・スタッフに書き換えてお使いください。"
  ],

  /* 選手（背番号・名前・ポジション・ひとこと） */
  players: [
    {no:"1",  name:"選手名", kana:"せんしゅめい", pos:"GK", note:"", photo:""},
    {no:"7",  name:"選手名", kana:"せんしゅめい", pos:"FP", note:"", photo:""},
    {no:"10", name:"選手名", kana:"せんしゅめい", pos:"FP", note:"", photo:""},
    {no:"11", name:"選手名", kana:"せんしゅめい", pos:"FP", note:"", photo:""},
    {no:"18", name:"選手名", kana:"せんしゅめい", pos:"FP", note:"", photo:""},
    {no:"23", name:"選手名", kana:"せんしゅめい", pos:"FP", note:"", photo:""}
  ],

  /* スタッフ（役割・名前） */
  staff: [
    {role:"監督",       name:"お名前"},
    {role:"コーチ",     name:"お名前"},
    {role:"マネージャー", name:"お名前"}
  ]
};

/* ===== 表示の仕組み ===== */
document.getElementById("teamLead").innerHTML = PAGE.lead.map(function(p){return '<p>'+esc(p)+'</p>';}).join("");

document.getElementById("roster").innerHTML = PAGE.players.map(function(p){
  var top = p.photo
    ? '<img src="'+esc(p.photo)+'" alt="'+esc(p.name)+'">'
    : '<span class="player-no">'+esc(p.no)+'</span>';
  return '<div class="player-card"><div class="player-top">'+top+'</div>'+
    '<div class="player-body"><span class="player-pos">'+esc(p.pos)+' ・ No.'+esc(p.no)+'</span>'+
    '<div class="player-name">'+esc(p.name)+'</div>'+
    (p.kana?'<div class="player-kana">'+esc(p.kana)+'</div>':'')+
    (p.note?'<div class="player-note">'+esc(p.note)+'</div>':'')+
    '</div></div>';
}).join("");

document.getElementById("staff").innerHTML = PAGE.staff.map(function(s){
  return '<div class="staff-card"><div class="staff-role">'+esc(s.role)+'</div>'+
    '<div class="staff-name">'+esc(s.name)+'</div></div>';
}).join("");

observeReveals();
</script>
</body>
</html>
