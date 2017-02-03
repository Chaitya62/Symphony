'use strict';

/**
 * @ngdoc function
 * @name symphonyApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the symphonyApp
 */
angular.module('symphonyApp')
  .controller('ContactCtrl', function ($scope,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.teams = [
        {
            name: 'General Secretary',
            members: [
                 {name: 'Hasti Sawla',src:'images/hasti.gif',
                 link:'https://in.linkedin.com/in/hasti-sawla-778819124',
                 fb: 'https://www.facebook.com/hasti.savla.3',  
               },
            ],
        },
        {
            name: 'Pro Nights',
            members: [
                 {name: 'Varun Kapadia',src:'images/varun.gif',link:'https://www.linkedin.com/in/varun-kapadia-801032b8',fb:'https://m.facebook.com/VeronK.7',},
                 {name: 'Apurva Mehta',src:'images/apurva.gif',link:'http://www.linkedin.com/in/apurva-mehta-550333113',fb: 'https://www.facebook.com/apurva.mehta2'},
            ],
        },
        {
            name: 'Logistics Team',
            members: [
                 {name: 'Benoy Parekh',src:'images/benoy.gif',link:'https://www.linkedin.com/in/benoy-parekh-60b3b9b0',fb: 'm.facebook.com/benoyparekh311996?ref=bookmarks',},
                 {name: 'Shail Vira',src:'images/shail.gif',link:'https://www.linkedin.com/in/shail-vira-930459126?trk=nav_responsive_tab_profile',fb:'https://www.facebook.com/shail.vira.1',},
                  {name: 'Jugal Shah',src:'images/jugal.gif',link:'http://linkedin.com/in/jugal-shah-252732122',fb: 'https://www.facebook.com/Jugalshah833',},

            ],
        },

        {
            name: 'Marketing Team',
            members: [
                 {name: 'Isha Bandi',src:'images/isha.gif',link:'https://in.linkedin.com/in/isha-bandi-825283101',fb: 'https://www.facebook.com/ishabandi',},
                  {name: 'Yash Shah',src:'images/yashsr.gif',link:'http://linkedin.com/in/yash-shah-ba5b3b101',fb: 'https://www.facebook.com/deaddrums',},
                  {name: 'Diya John',src: 'images/diya.gif',link:'https://www.linkedin.com/in/diya-john-382007b8',fb: 'https://www.facebook.com/diya.john.25',},
                 {name: 'Vatsal Maru',src: 'images/vatsal.gif',link:'https://www.linkedin.com/in/vatsal-maru-922a1b121',fb: 'https://www.facebook.com/vatsal.maru',},
                   {name: 'Kushal Acharya',src: 'images/kushal.gif',link:'https://touch.www.linkedin.com/?sessionid=3857747313426432&voyurl=https%3A%2F%2Fwww.linkedin.com%2Fm%2F%3Fsessionid%3D3857747313426432&rs=false&redirectUrl=%23stream#you',fb:'https://www.facebook.com/kushal.acharya.14',},
                  {name: 'Samreen Shaikh',src:'images/samrin.gif',link:'https://www.linkedin.com/in/samreen-shaikh-93b939111',fb:'https://www.facebook.com/samreen.shaikh.102977',},
                   

            ],
        }, 
         {
            name: 'Public Relations',
            members: [
                 {name: 'Srijita Paul',src:'images/srijita.gif',link:'https://www.linkedin.com/in/srijita-paul-2363a7110',fb: 'https://www.facebook.com/paul.srijita',},
                  {name: 'Zaid Farooqui',src:'images/zaid.gif',link:'https://www.linkedin.com/in/zaid-farooqui-46b49b124?trk=nav_responsive_tab_profile_pic',fb: 'https://www.facebook.com/zaid.farooqui.79',},
                   {name: 'Ayush Gandhi',src: 'images/ayushg.gif',link:'https://www.linkedin.com/in/ayush-gandhi-052748122',fb:'https://www.facebook.com/ayush.gandhi.733',},
                   {name: 'Parin Shah',src: 'images/parin.gif',link:'https://in.linkedin.com/in/parin-shah-262218126',fb:'https://www.facebook.com/parin.shah.961'},

            
            ],
        }, 
        {
            name: 'Security Team',
            members: [
                {name: 'Nishad Joshi',src:'images/nishad.gif',link:'https://www.linkedin.com/in/nishad-joshi-021641108',fb: 'https://www.facebook.com/nishad.joshi.10',},
                {name: 'Aayush Shah',src: 'images/aayush.gif',link:'https://www.linkedin.com/in/aayush-s-1a0b99102/',fb:'https://www.facebook.com/aayushah19',},
                {name: 'Harjot Singh Dadial',src:'images/harjot.gif',link:'https://www.linkedin.com/in/harjot-singh-dadial-b8a6b0115',fb:'https://www.facebook.com/harjot.singh.961',},
                {name: 'Hitanshu Trivedi',src: 'images/hitanshu.gif',link:'#!/contact',fb:'https://www.facebook.com/hitanshu.trivedi.3'},
            ],
        },      
        {
            name: 'Creative Team',
            members: [
              
              {name: 'Harmit Sampat',src:'images/harmit.gif',link:'https://www.linkedin.com/in/harmit-sampat-1358a3131',fb:'https://www.facebook.com/harmit.sampat'},
              {name: 'Sudhanva Vaidya',src:'images/sudhanva.gif',link:'https://www.linkedin.com/in/sudhanva-vaidya-803038131',fb:'https://www.facebook.com/electron.theory'},

            ],
        },
        {
            name: 'Hospitality Team',
            members: [
                 {name: 'Ayush Shukla',src:'images/ayushshukla.gif',link:'https://www.linkedin.com/in/shukla-ayush',fb:'https://www.facebook.com/shuklaayu',},
                 {name: 'Janam Mehta',src:'images/janam.gif',link:'https://www.linkedin.com/in/janam-m-9162a0a1',fb:'https://www.facebook.com/janam.p.mehta',},
                {name: 'Chirag Shah',src:'images/chirag.gif',link:'https://www.linkedin.com/in/chirag-shah-9b1a70b0',fb:'https://www.facebook.com/chirag.shah.9421',},

            ],
        },
        {
            name: 'Online Media & PR',
            members: [
                 {name: 'Yash Shah',src: 'images/yashS.gif',link:'https://www.linkedin.com/in/yashshhah',fb:'https://www.facebook.com/yashshhah',},
                  {name: 'Leander Mascarenhas',src: 'images/lea.gif',link:'#!/contact',fb:'https://www.facebook.com/leander.mascarenhas.7',},
                  {name: 'Aditya Madhavan',src: 'images/Madhavan.gif',link:'https://in.linhttps://www.facebook.com/arya.ambardekarkedin.com/in/adityamadhavan',fb:'https://www.facebook.com/aditya.madhavan.9',},
                  {name: 'Khyatee Thakkar',src:'images/khyatee.gif',link:'https://in.linkedin.com/in/khyateethakkar3',fb:'https://www.facebook.com/khyateethakkar3'},
            ],
        },
        {
            name: 'Events Team',
            members:[
                 {name: 'Kavya Purushothaman',src:'images/kavya.gif',link:'https://www.linkedin.com/in/kavya-purushothaman-33966a128',fb:'https://www.facebook.com/kavya.purushothaman',},
                 {name: 'Shreya Parikh',src:'images/shreya.gif',link:'https://www.linkedin.com/in/shreya-parikh-651843128/',fb:'https://www.facebook.com/parikhr01',},
                 {name: 'Dhruvi Chauhan',src: 'images/dhruvi.gif',link:'https://www.linkedin.com/in/dhruvi-chauhan-574667128',fb:'https://www.facebook.com/profile.php?id=100009365884248',},

            ],
        },
        {
            name: 'Cultural Co-ordinator',
            members: [
                {name: 'Rachit Gada',src:'images/rachit.gif',link:'https://www.linkedin.com/in/rachit-gada-627b42b0',fb:'https://www.facebook.com/rachit.gada',},
            ],
        },
         {
            name: 'Parvaah',
            members: [
               {name: 'Umang Rupareliya',src:'images/umang.gif',link:'https://www.linkedin.com/in/umang-rupareliya-b80677124',fb:'https://www.facebook.com/umang.rupa',},
               {name: 'Mansi Shah',src:'images/mansi.gif',link:'https://www.linkedin.com/in/mansi-shah-331a89133',fb:'https://www.facebook.com/s.mansi26',},
            ],
        },
        {
            name: 'Press Media Team',
            members: [
               {name: 'Arya Ambardekar',src:'images/arya.gif',link:'https://www.linkedin.com/in/arya-ambardekar-933191b5',fb:'https://www.facebook.com/arya.ambardekar',},
                {name: 'Akanksha Rao',src:'images/akanksha.gif',link:'#!/contact',fb:'https://www.facebook.com/akanksha.rao.583',},

            ],
        },
        {
            name: 'Art and Decor Team',
            members: [
                {name: 'Vineet Kothari',src:'images/vineet.gif',link:'#!/contact',fb:'https://www.facebook.com/vineet.kothari.718',},
            ],
        },
         {
            name: 'Developer',
            members: [
                {name: 'Chaitya Shah',src:'images/chaitya.gif',link:'https://in.linkedin.com/in/chaitya-shah-74865b11b',fb:'https://www.facebook.com/Chaitya62'},
                
            ],
        },  
    



    ];
    var members = [
 //    {name:'Hasti Sawla',src:'./favicon.ico',link:''},
	// {name:'Benoy',src:'./favicon.ico',link:''},
	// {name:'Apurva',src:'./favicon.ico',link:''},
 //    {name:'Chaitya',src:'./favicon.ico',link:''},
 //    {name:'Sudhanva',src:'./favicon.ico',link:''},
 //    {name:'Harmit',src:'./favicon.ico',link:''},
     {name: 'Diya John',src: 'images/diya.gif',link:'https://www.linkedin.com/in/diya-john-382007b8'},
    {name: 'Aayush Shah',src: 'images/aayush.gif',link:'https://www.linkedin.com/in/aayush-s-1a0b99102/'},
    {name: 'Dhruvi Chauhan',src: 'images/dhruvi.gif',link:'https://www.linkedin.com/in/dhruvi-chauhan-574667128'},
    {name: 'Hitanshu Trivedi',src: 'images/hitanshu.gif',link:'#!/contact'},
    {name: 'Vatsal Maru',src: 'images/vatsal.gif',link:'https://www.linkedin.com/in/vatsal-maru-922a1b121'},
    {name: 'Yash Shah',src: 'images/yashS.gif',link:'www.linkedin.com/in/yashshhah'},
    {name: 'Leander Mascarenhas',src: 'images/lea.gif',link:'#!/contact'},
    {name: 'Shreya Parikh',src:'images/shreya.gif',link:'https://www.linkedin.com/in/shreya-parikh-651843128/'},
    {name: 'Shail Vira',src:'images/shail.gif',link:'https://www.linkedin.com/in/shail-vira-930459126?trk=nav_responsive_tab_profile'},
    {name: 'Zaid Farooqui',src:'images/zaid.gif',link:'https://www.linkedin.com/in/zaid-farooqui-46b49b124?trk=nav_responsive_tab_profile_pic'},
    {name: 'Arya Ambardekar',src:'images/arya.gif',link:'https://www.linkedin.com/in/arya-ambardekar-933191b5'},
    {name: 'Chaitya Shah',src:'images/chaitya.gif',link:'https://in.linkedin.com/in/chaitya-shah-74865b11b'},
    {name: 'Nishad Joshi',src:'images/nishad.gif',link:'https://www.linkedin.com/in/nishad-joshi-021641108'},
    {name: 'Umang Rupareliya',src:'images/umang.gif',link:'#!/contact'},
    {name: 'Kavya Purushothaman',src:'images/kavya.gif',link:'https://www.linkedin.com/in/kavya-purushothaman-33966a128'},
    {name: 'Janam Mehta',src:'images/janam.gif',link:'https://www.linkedin.com/in/janam-m-9162a0a1'},
    {name: 'Chirag Shah',src:'images/chirag.gif',link:'https://www.linkedin.com/in/chirag-shah-9b1a70b0'},
    {name: 'Samreen Shaikh',src:'images/samrin.gif',link:'https://www.linkedin.com/in/samreen-shaikh-93b939111'},
    {name: 'Ayush Gandhi',src: 'images/aayushg.gif',link:'https://www.linkedin.com/in/ayush-gandhi-052748122'},
    {name: 'Kushal Acharya',src: 'images/kushal.gif',link:'https://touch.www.linkedin.com/?sessionid=3857747313426432&voyurl=https%3A%2F%2Fwww.linkedin.com%2Fm%2F%3Fsessionid%3D3857747313426432&rs=false&redirectUrl=%23stream#you'},
    {name: 'Harjot Singh Dadial',src:'images/harjot.gif',link:'https://www.linkedin.com/in/harjot-singh-dadial-b8a6b0115'},
    {name: 'Yash Shah',src:'images/yashsr.gif',link:'http://linkedin.com/in/yash-shah-ba5b3b101'},
    {name: 'Isha Bandi',src:'images/isha.gif',link:'https://in.linkedin.com/in/isha-bandi-825283101'},
    {name: 'Parin Shah',src: 'images/parin.gif',link:'https://in.linkedin.com/in/parin-shah-262218126'},
    {name: 'Vineet Kothari',src:'images/vineet.gif',link:'#!/contact'},
    {name: 'Jugal Shah',src:'images/jugal.gif',link:'http://linkedin.com/in/jugal-shah-252732122'},
    {name: 'Sudhanva Vaidya',src:'images/sudhanva.gif',link:'https://www.linkedin.com/in/sudhanva-vaidya-803038131'},
    {name: 'Harmit Sampat',src:'images/harmit.gif',link:'https://www.linkedin.com/in/harmit-sampat-1358a3131'},
    {name: 'Ayush Shukla',src:'images/ayushshukla.gif',link:'https://www.linkedin.com/in/shukla-ayush'},
    {name: 'Srijita Paul',src:'images/srijita.gif',link:'https://www.linkedin.com/in/srijita-paul-2363a7110'},
    {name: 'Varun Kapadia',src:'images/varun.gif',link:'https://www.linkedin.com/in/varun-kapadia-801032b8'},
    {name: 'Apurva Mehta',src:'images/apurva.gif',link:'http://www.linkedin.com/in/apurva-mehta-550333113'},
    {name: 'Hasti Sawla',src:'images/hasti.gif',link:'https://in.linkedin.com/in/hasti-sawla-778819124'},
     {name: 'Benoy Parekh',src:'images/benoy.gif',link:'https://www.linkedin.com/in/benoy-parekh-60b3b9b0'},
     {name: 'Akanksha Rao',src:'images/akanksha.gif',link:'https://in.linkedin.com/in/hasti-sawla-778819124'},
     {name: 'Mansi Shah',src:'images/mansi.gif',link:'https://in.linkedin.com/in/hasti-sawla-778819124'},
     {name: 'Rachit Gada',src:'images/rachit.gif',link:'https://in.linkedin.com/in/hasti-sawla-778819124'},
     
    ];
    $scope.name;
    $scope.id;
    $scope.college;
    $scope.number;
    $scope.query;


    $scope.SubmitForm = function(){
        console.log($scope.id)
    
        var data = {
        'entry.912330830': $scope.name,
        'entry.915948011':$scope.number,
        'entry.891202554': $scope.id,
        'entry.922081494':$scope.college,
        'entry.213325813':$scope.query,
        };
         var url = 'https://docs.google.com/a/somaiya.edu/forms/d/e/1FAIpQLSe6QApkWzaoyAmPH_60j9JNLycgAx8Er1ZstUcLgcXhvK2dkQ/formResponse';
        postData(url,data)
       
        $scope.name = "";
        $scope.id = "";
        $scope.college = "";
        $scope.number = "";
        $scope.query = "";
        alert("Your reponse has been recorded");    

    };





  });

function postData(url,data){
  
     $.ajax({
                url: url,
                data: data,
                type: 'POST',
                dataType: 'xml'
            });

}