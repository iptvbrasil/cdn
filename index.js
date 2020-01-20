// import contentIndex from '../data'
const contentIndex = {
    'zh-CN': {
        Home: '首页',
        Features: '特性',
        Download: '下载',
        English: 'English',
        Chinese: '中文',
        title_one: '全球最受欢迎的',
        title_two: '安卓mod应用商店',
        tips: '终极版的破解/修改/骇客安卓游戏与应用。',
        download: '立即下载',
        learn: '了解更多',
        featuresTitle: '特性',
        Amazing: '非凡特性',
        Friendly: '易用',
        ACMarket: "我们为你精心打磨ACMarket的每个细节，让它精致而易用。",
        Super: '极速',
        TheApp: 'App极速打开，下载速度也快得惊人。',
        Warm: '社群',
        IfYou: '无论你有任何问题，都能在我们社群得到最快的回复。',
        Secure: '安全',
        Yoursafety: "我们关心你的安全，所以我们会测试每一款应用。",
        AwesomeRating: '高分',
        Wehave: '在ACMarket，你能找到最流行的游戏和应用。',
        WorldWide: '全球',
        ACMarketsupport: 'ACMarket面向全球用户，支持超过20种语言。',
        VideoIntroduction: '视频介绍',
        Screenshots: '截图',
        AppScreens: '应用截图',
        DownloadOur: '立即下载',
        DownloadandInstall: '马上下载安装ACMarket，将所有的mod和破解软件一网打尽',
        banben: '*需要Android4.4.2以上系统',
        FromOfficial: '去官网',
        WorldMost: '全球最受欢迎的安卓mod应用商店',
        Theultimate: '终极版的破解/修改/骇客安卓游戏与应用。',
        Resource: '资源',
        Community: '社群',
        Become: '成为合作者',
        OurTechnology: '技术支持',
        Documentation: '文档',
        ACMarketTitle: 'ACMarket',
        ACMarketFull: 'ACMarket完整版',
        Fullfeatures: '完整版本,需要Google Service。<br>* 需要Android4.4.2以上系统',
        Downloadull: '下载完整版',
        ACMarketLite: 'ACMarket Lite版',
        OnlyforAndroid: "不需要Google Service，部分功能无法使用。",
        banben_1: '* 需要Android4.3以上系统',
        DownloadLite: '下载Lite版',
        WorldMostPopular: '全球最受欢迎的安卓mod应用商店'
    },
    'en-HK': {
        Home: 'Home',
        Features: 'Features',
        Download: 'Download',
        English: 'English',
        Chinese: '中文',
        title_one: 'World Most Popular ',
        title_two: ' Android Mod Store',
        tips: 'The ultimate choice for modified / tweaked / hacked / cracked apps and games for your Android devices.',
        download: 'Download Now',
        learn: 'Learn More',
        featuresTitle: 'features',
        Amazing: 'Amazing Features',
        Friendly: 'User Friendly',
        ACMarket: "ACMarket 4 is redesigned from every detail, it's beautiful and easy to use.",
        Super: 'Super Fast Speed',
        TheApp: 'The app is super responsive, as well as the download speed.',
        Warm: 'Warm Community',
        IfYou: 'If you have any questions, join our community, we are very friendly.',
        Secure: 'Secure',
        Yoursafety: "Your safety is important to us, that's why we test most of the Mods we host.",
        AwesomeRating: 'Awesome Rating',
        Wehave: 'We have the most popular games and apps, cracked or mods.',
        WorldWide: 'World Wide',
        ACMarketsupport: 'ACMarket support about 20+ languages, and counting.',
        VideoIntroduction: 'Video Introduction',
        Screenshots: 'Screenshots',
        AppScreens: 'App Screens',
        DownloadOur: 'Download Our App Now',
        DownloadandInstall: 'Download and Install ACMarket app today, get all the mods and cracks in your hand now.',
        banben: '* Requires Android >= 4.4.2',
        FromOfficial: 'From Official Site',
        WorldMost: 'World Most Popular Android Mod Store',
        Theultimate: 'The ultimate choice for modified / tweaked / hacked / cracked apps and games for your Android devices.',
        Resource: 'Resource',
        Community: 'Community',
        Become: 'Become a Partner',
        OurTechnology: 'Our Technology',
        Documentation: 'Documentation',
        ACMarketTitle: 'ACMarket',
        ACMarketFull: 'ACMarket Full Version',
        Fullfeatures: 'Full features Android Market, Google Service is required.<br>* Requires Android >= 4.4.2 ',
        Downloadull: 'Download Full Version',
        ACMarketLite: 'ACMarket Lite',
        OnlyforAndroid: "Only for Android devices don't have Google Services, features are limited.",
        banben_1: '* Requires Android >= 4.3',
        DownloadLite: 'Download Lite Version',
        WorldMostPopular: 'World Most Popular Android Mod Store'
    }
}

var lang = localStorage.getItem('language') || 'en-HK'

lang == 'en-HK' ? changeHtmlLanguage('en-HK') : changeHtmlLanguage('zh-CN')
lang == 'en-HK' ? $('.languageClick').text('English') : $('.languageClick').text('中文')

$('.languageClick').click(function() {
    if(window.innerWidth > 767) {
        $('.nav-select').show();
    }
})

$('.nav-select').hover(function() {
    $(this).show()
}, function() {
    $(this).hide()
})

$('.nav-select ul li').click(function() {
    if(window.innerWidth > 767) {
        $('.nav-select').hide();
        if($(this).text() == 'English') {
            lang = 'en-HK'
            changeHtmlLanguage(lang)
        } else {
            lang = 'zh-CN'
            changeHtmlLanguage(lang)
        }
        localStorage.setItem('language', lang)
    } else {
        $('.navbar-collapse').removeClass('show');
        if($(this).text() == 'English') {
            lang = 'en-HK'
            changeHtmlLanguage(lang)
        } else {
            lang = 'zh-CN'
            changeHtmlLanguage(lang)
        }
        localStorage.setItem('language', lang)
    }
})

function changeHtmlLanguage(language) {
    $('.itemHome1').text(contentIndex[language].Home)
    $('.itemHome2').text(contentIndex[language].Features)
    $('.itemHome3').text(contentIndex[language].Screenshots)
    $('.itemHome4').text(contentIndex[language].Download)
    if(language == 'zh-CN') {
        $('.itemHome5').text(contentIndex[language].Chinese)
    } else {
        $('.itemHome5').text(contentIndex[language].English)
    }
    $('.itemHome6').text(contentIndex[language].English)
    // $('.itemHome6').text(contentIndex[language].English)
    $('.itemHome7').text(contentIndex[language].English)
    $('.itemHome8').text(contentIndex[language].Chinese)
    $('.itemHome9').html(contentIndex[language].title_one + '<br>' + contentIndex[language].title_two)
    $('.itemHome10').text(contentIndex[language].tips)
    $('.itemHome11').text(contentIndex[language].download)
    $('.itemHome12').text(contentIndex[language].learn)
    $('.itemHome13').text(contentIndex[language].featuresTitle)
    $('.itemHome14').text(contentIndex[language].Amazing)
    $('.itemHome15').text(contentIndex[language].Friendly)
    $('.itemHome16').text(contentIndex[language].ACMarket)
    $('.itemHome17').text(contentIndex[language].Super)
    $('.itemHome18').text(contentIndex[language].TheApp)
    $('.itemHome19').text(contentIndex[language].Warm)
    $('.itemHome20').text(contentIndex[language].IfYou)
    $('.itemHome21').text(contentIndex[language].Secure)
    $('.itemHome22').text(contentIndex[language].Yoursafety)
    $('.itemHome23').text(contentIndex[language].AwesomeRating)
    $('.itemHome24').text(contentIndex[language].Wehave)
    $('.itemHome25').text(contentIndex[language].WorldWide)
    $('.itemHome26').text(contentIndex[language].ACMarketsupport)
    $('.itemHome27').text(contentIndex[language].VideoIntroduction)
    $('.itemHome28').text(contentIndex[language].Screenshots)
    $('.itemHome29').text(contentIndex[language].AppScreens)
    $('.itemHome30').text(contentIndex[language].DownloadOur)
    $('.itemHome31').html(contentIndex[language].DownloadandInstall + '<br>' + contentIndex[language].banben)
    $('.itemHome32').text(contentIndex[language].FromOfficial)
    $('.itemHome33').html(contentIndex[language].WorldMost + '<br>' + contentIndex[language].Theultimate + '<br>' + contentIndex[language].banben)
    $('.itemHome34').text(contentIndex[language].Resource)
    $('.itemHome35').text(contentIndex[language].Community)
    $('.itemHome36').text(contentIndex[language].Become)
    $('.itemHome37').text(contentIndex[language].OurTechnology)
    $('.itemHome38').text(contentIndex[language].Documentation)
    $('.itemHome39').text(contentIndex[language].ACMarketTitle)
    $('.download1').text(contentIndex[language].ACMarketFull)
    $('.download2').html(contentIndex[language].Fullfeatures)
    $('.download3').text(contentIndex[language].Downloadull)
    $('.download4').text(contentIndex[language].ACMarketLite)
    $('.download5').html(contentIndex[language].ACMarketFull + '<br>' + contentIndex[language].banben_1)
    $('.download6').text(contentIndex[language].DownloadLite)
    $('.download7').html(contentIndex[language].WorldMostPopular + '<br>' + contentIndex[language].Theultimate + '<br>' + contentIndex[language].banben)
    $('.download8').text(contentIndex[language].Resource)
    $('.download9').text(contentIndex[language].Community)
    $('.download10').text(contentIndex[language].Become)
    $('.download11').text(contentIndex[language].OurTechnology)
    $('.download12').text(contentIndex[language].Documentation)
    $('.download13').text(contentIndex[language].ACMarketTitle)
}