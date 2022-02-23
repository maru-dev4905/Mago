$(document).ready(function(){
   var sectionBg   = $(".section").eq(2).find(".sec-bg");

   var tabBtn      = $(".tab-button-wrap button");
   var title       = $(".tab-title h3");
   var subTitle    = $(".tab-title h4");
   var desc        = $(".tab-content p");

   var prevBtn     = $(".tab-controller .prev-btn");
   var nextBtn     = $(".tab-controller .next-btn");
   var current     = $(".tab-controller .current");
   var total       = $(".tab-controller .total");

   var TOTAL_NUMBER = 6;


    var titleArray = [
         "1. 코인 기획"
        ,"2. 백서작성"
        ,"3. 블록체인 개발"
        ,"4. 마케팅 및 상장"
        ,"5. 컨설팅"
        ,"6. 기타 서비스"
    ];

    var subTitleArray = [
         "Coin Design"
        ,"Writing a white paper"
        ,"Blockchain development"
        ,"Marketing & Listing"
        ,"Consulting."
        ,"Other services."
    ];

    var descArray = [
        `
            아이템과 비즈니스에 맞는 적용 기술, 발행량, 보상 체계, 정책 수립 및 스마트 컨트랙트 활용까지
            <br>
            토큰 기획과 관련된 모든 서비스를 지원합니다.
        `
        ,`
             사업에 날개를 달아드리는 백서 작성과 디자인 그리고 번역까지 토탈 지원
             <br>
             <span>
                 -기간 Super high 1,2일 내  /  Express  4~6일 내  / General 10~15일 내  작성 완료
                 <br>
                 -비용은 분량이 아닌 퀄리티와 전문성의 기준입니다.
             </span>
         `
        ,`
            NFT 및 Token, 메인넷, De-fi, Exchange, Swap, Mining, Cross Wallet, DEX etc
            <br>
            Ethereum/ Solana/ Bitcoin/ Binance chain/ Clayton/ Polygon and others.
        `
        ,`
            목표와 예산에 맞게 성장하고 상장하는 방법은 마고가 가장 정확히 알려 드립니다.
            <br>
            거품 없는 마케팅비와 상장피 알고 싶으시면 마고와 함께 하세요.            
        `
        ,`
            토탈 컨설팅을 통해 성장 방안을 제시합니다.
            <br>
            Mago의 손을 잡고 날아오르십시오
        `
        ,`
            메타버스 개발 컨설팅, 콘텐츠 NFT 마켓플레이스 구축
            <br>
            PG / 거래소 등 금융 인허가, 각종 인증 컨설팅.            
        `
    ]

    tabBtn.click(function(){
        var th = $(this);
        var thIndex = th.index(); 
 
        tabBtn.removeClass("active");
        th.addClass("active");

        title.html(titleArray[thIndex]);
        subTitle.html(subTitleArray[thIndex]);
        desc.html(descArray[thIndex]);
   
        current.text(thIndex + 1);

        sectionBg.removeClass("active");
        sectionBg.eq(thIndex).addClass("active");
    });

    prevBtn.click(function(){
        var thIndex = $(".tab-button-wrap button.active").index();
        tabBtn.removeClass("active");
        
        if(thIndex == 0){
            thIndex = TOTAL_NUMBER;

            tabBtn.eq(thIndex - 1).addClass("active");
                
            title.html(titleArray[TOTAL_NUMBER - 1]);
            subTitle.html(subTitleArray[TOTAL_NUMBER - 1]);
            desc.html(descArray[TOTAL_NUMBER - 1]);
    
            current.text(TOTAL_NUMBER);
                
            sectionBg.removeClass("active");
            sectionBg.eq(TOTAL_NUMBER - 1).addClass("active");

        }else{
            tabBtn.eq(thIndex - 1).addClass("active");
        
            title.html(titleArray[thIndex - 1]);
            subTitle.html(subTitleArray[thIndex - 1]);
            desc.html(descArray[thIndex - 1]);
    
            current.text(thIndex);

            sectionBg.removeClass("active");
            sectionBg.eq(thIndex - 1).addClass("active");
        }
        
    });

    nextBtn.click(function(){
        var thIndex = $(".tab-button-wrap button.active").index();
        tabBtn.removeClass("active");
        
        console.log(thIndex);

        if(thIndex + 1 == TOTAL_NUMBER){
            thIndex = 1;

            tabBtn.eq(thIndex - 1).addClass("active");
                
            title.html(titleArray[0]);
            subTitle.html(subTitleArray[0]);
            desc.html(descArray[0]);
    
            current.text(1);
            
            sectionBg.removeClass("active");
            sectionBg.eq(0).addClass("active");
        }else{
            tabBtn.eq(thIndex + 1).addClass("active");
        
            title.html(titleArray[thIndex + 1]);
            subTitle.html(subTitleArray[thIndex + 1]);
            desc.html(descArray[thIndex + 1]);
    
            current.text(thIndex + 2);

            sectionBg.removeClass("active");
            sectionBg.eq(thIndex + 1).addClass("active");
        }
    });
});