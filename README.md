If you don't know what this application is intended for, you probably shouldn't be here. However, this stuff really isn't a security risk so go ahead and waste your time going through it. 

## Local Dev Setup ##
1. Pull/Clone current repository to your local computer
2. Use Command Line to go to this directory on your computer
3. Run `yarn` to setup your local environment
    * If you don't have the `yarn` command available to you, install node & yarn globally on your computer. I recommend 
        1. Installing [brew.sh](https://brew.sh/)
        2. Run `brew install yarn`
4. Run `yarn dev-server` to setup local server
    * You can run dev-server on a different port using `webpack-dev-server --port {port}`
5. Go to http://localhost:8080/ and develop locally

## Live Site Adobe Target Integration Dev Setup ##
1. Setup Local Dev (above)
2. Ensure AncestryVPN is disconnected
3. Start Charles
    * If first time setting up, do the following
        1. Go to Tools > Map Remote
        2. Check "Enable Map Remote"
        3. Click "Add" and set 
            * Map From: https://www.ancestrycdn.com/tao/mvtstyles.css
            * Map To: http://localhost:8080/dist/styles.css (change port if needed)
        4. Click "Add" and set
            * Map From: https://www.ancestrycdn.com/tao/mvtbundle.js
            * Map To: http://localhost:8080/dist/bundle.js (change port if needed)
4. Load the following links directly in browser (change port if needed).[^1]
    * http://localhost:8080
    * http://localhost:8080/dist/bundle.js
    * http://localhost:8080/dist/styles.css
5. Go to one of the following links and see the magic.[^2]
    * [FTLP](https://www.ancestry.com/cs/offers/freetrial?spamvtpoconly&at_preview_token=UxvA3EOIPkBy3TpI%2F88wCO0mBMtwWa3LOKtwa0Eixnk%3D&at_preview_index=1_1&at_preview_listed_activities_only=true&at_preview_evaluate_as_true_audience_ids=1097588)
    * [HOLP](https://www.ancestry.com/cs/offers/subscribe?spamvtpoconly&at_preview_token=UxvA3EOIPkBy3TpI%2F88wCO0mBMtwWa3LOKtwa0Eixnk%3D&at_preview_index=1_1&at_preview_listed_activities_only=true&at_preview_evaluate_as_true_audience_ids=1100159)
    * [CARE US Discovery](https://www.ancestry.com/cs/offers/join?spamvtpoconly&at_preview_token=UxvA3EOIPkBy3TpI%2F88wCO0mBMtwWa3LOKtwa0Eixnk%3D&at_preview_index=1_1&at_preview_listed_activities_only=true&at_preview_evaluate_as_true_audience_ids=1100159&sub=9288674231746560&dbid=2204&url=http%3a%2f%2fsearch.ancestry.com%2fcgi-bin%2fsse.dll%3fgss%3dangs-c%26new%3d1%26rank%3d1%26msT%3d1%26gsfn%3dJohn%26gsln%3dSmith%26MSAV%3d0%26cp%3d0%26catbucket%3drstp%26uidh%3d000%26pcat%3dBMD_BIRTH%26h%3d815672%26db%3dSARMemberApps%26indiv%3d1%26ml_rpos%3d1%26requr%3d9288674231746560%26ur%3d0&gsfn=John&gsln=Smith&h=815672)
    * [CARE World Deluxe](https://www.ancestry.com/cs/offers/join?spamvtpoconly&at_preview_token=UxvA3EOIPkBy3TpI%2F88wCO0mBMtwWa3LOKtwa0Eixnk%3D&at_preview_index=1_1&at_preview_listed_activities_only=true&at_preview_evaluate_as_true_audience_ids=1100159&sub=11540766109237252&dbid=1175&url=http%3a%2f%2fsearch.ancestry.com%2fcgi-bin%2fsse.dll%3fgss%3dangs-c%26new%3d1%26rank%3d1%26msT%3d1%26gsfn%3dJohn%26gsln%3dSmith%26MSAV%3d0%26cp%3d11%26catbucket%3drstp%26cpxt%3d1%26pcat%3d34%26h%3d7130%26recoff%3d7%2b8%26db%3dBreconMarriages%26indiv%3d1%26ml_rpos%3d1%26requr%3d11540766109237252%26ur%3d0&gsfn=John&gsln=Smith&h=7130)

[^1]: Since the local dev server isn't doing a full compile and is loading from memory, the above direct links force the browser to create the file and place it in memory long enough for Charles to pick up the mapping. From time to time you may need to do a force refresh of the page link.

[^2]: Use the settings display that shows at the top by default to ensure you're seeing what you would expect. You can hide settings on page load by adding `hidesettings` to the query string in the url.