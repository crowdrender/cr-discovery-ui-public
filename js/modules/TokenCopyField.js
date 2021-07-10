import{getCookie}from"./Cookie.js";import copyTextToClipboard from"./Clipboard.js";import createSnackbarItem from"./Snackbar.js";import selectElementContents from"./SelectElementContents.js";const copySvgMarkup=`
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 606.816 606.816">
  <g fill="#fff">
    <g>
      <g>
        <path d="M477.884,79.917h-50.825c-11.908-7.781-24.874-13.455-36.857-17.557c-5.595-14.695-14.537-27.921-26.047-38.28     C347.263,8.875,325.688,0.5,303.408,0.5c-22.281,0-43.854,8.374-60.747,23.581c-11.509,10.36-20.452,23.586-26.046,38.28     c-11.984,4.102-24.949,9.776-36.857,17.557h-50.825c-32.058,0-58.14,26.082-58.14,58.14v410.118     c0,32.059,26.082,58.141,58.14,58.141h348.951c32.058,0,58.14-26.082,58.14-58.141V138.057     C536.023,105.999,509.941,79.917,477.884,79.917z M253.876,87.36c0.491-2.551,1.149-5.034,1.947-7.442     c7.067-21.335,25.7-36.578,47.585-36.578c21.885,0,40.518,15.243,47.585,36.578c0.798,2.409,1.456,4.891,1.947,7.442     c1.117,5.81,5.572,10.378,11.294,11.885c20.769,5.473,37.699,13.664,48.5,23.512c1.703,1.553,3.259,3.146,4.648,4.777     c6.852,8.046,1.201,20.417-9.367,20.417H198.801c-10.568,0-16.218-12.37-9.367-20.417c1.389-1.632,2.945-3.224,4.648-4.777     c10.801-9.849,27.732-18.04,48.5-23.512C248.304,97.737,252.758,93.169,253.876,87.36z M493.184,548.176     c0,8.451-6.851,15.301-15.3,15.301h-348.95c-8.45,0-15.3-6.85-15.3-15.301V138.057c0-8.45,6.85-15.3,15.3-15.3h16.175     c-0.507,2.123-0.894,4.28-1.147,6.468c-1.164,10.078,0.478,20.292,4.75,29.538c4.262,9.227,10.955,17.082,19.354,22.717     c9.08,6.091,19.708,9.311,30.735,9.311h209.215c11.027,0,21.655-3.22,30.734-9.312c8.4-5.635,15.094-13.491,19.355-22.717     c4.271-9.246,5.913-19.46,4.75-29.538c-0.253-2.187-0.641-4.344-1.147-6.467h16.175c8.45,0,15.3,6.85,15.3,15.3V548.176     L493.184,548.176z"/>
        <path d="M477.884,606.816H128.933c-32.334,0-58.64-26.306-58.64-58.641V138.058c0-32.334,26.306-58.64,58.64-58.64h50.676     c10.493-6.839,22.812-12.71,36.622-17.454c5.656-14.751,14.676-27.976,26.096-38.255C259.312,8.42,281.004,0,303.408,0     s44.097,8.42,61.081,23.709c11.419,10.278,20.439,23.502,26.096,38.255c13.813,4.746,26.133,10.617,36.622,17.454h50.677     c32.334,0,58.64,26.306,58.64,58.64v410.119C536.523,580.511,510.218,606.816,477.884,606.816z M128.933,80.418     c-31.783,0-57.64,25.857-57.64,57.64v410.118c0,31.783,25.857,57.641,57.64,57.641h348.951c31.782,0,57.64-25.857,57.64-57.641     V138.057c0-31.783-25.857-57.64-57.64-57.64H426.91l-0.125-0.082c-10.503-6.863-22.865-12.751-36.746-17.502l-0.222-0.076     l-0.083-0.219c-5.595-14.693-14.556-27.863-25.915-38.086C347.02,9.329,325.565,1,303.408,1s-43.612,8.329-60.412,23.452     c-11.359,10.225-20.32,23.395-25.914,38.086l-0.083,0.219l-0.222,0.076c-13.877,4.749-26.24,10.638-36.746,17.502l-0.125,0.082     H128.933z M477.884,563.977h-348.95c-8.712,0-15.8-7.088-15.8-15.801V138.057c0-8.712,7.088-15.8,15.8-15.8h16.809l-0.147,0.616     c-0.509,2.132-0.892,4.289-1.137,6.409c-1.153,9.987,0.474,20.108,4.708,29.27c4.223,9.144,10.855,16.928,19.179,22.512     c8.997,6.036,19.528,9.226,30.457,9.226h209.215c10.928,0,21.46-3.19,30.456-9.227c8.324-5.584,14.957-13.369,19.18-22.512     c4.232-9.162,5.86-19.283,4.707-29.271c-0.245-2.118-0.627-4.274-1.137-6.408l-0.147-0.616h16.809c8.712,0,15.8,7.088,15.8,15.8     v410.119C493.684,556.889,486.596,563.977,477.884,563.977z M128.934,123.257c-8.161,0-14.8,6.639-14.8,14.8v410.119     c0,8.161,6.639,14.801,14.8,14.801h348.95c8.161,0,14.8-6.64,14.8-14.801V138.057c0-8.161-6.639-14.8-14.8-14.8h-15.545     c0.447,1.971,0.788,3.956,1.015,5.909c1.174,10.171-0.483,20.478-4.793,29.805c-4.301,9.31-11.054,17.236-19.531,22.923     c-9.161,6.147-19.886,9.396-31.013,9.396H198.802c-11.127,0-21.852-3.249-31.014-9.396c-8.477-5.687-15.23-13.613-19.53-22.923     c-4.31-9.329-5.967-19.635-4.792-29.804c0.226-1.956,0.567-3.941,1.014-5.911H128.934z M408.016,148.451H198.801     c-5.066,0-9.531-2.852-11.652-7.444c-2.135-4.622-1.406-9.909,1.904-13.797c1.375-1.614,2.953-3.237,4.692-4.822     c10.89-9.929,27.733-18.099,48.71-23.626c5.579-1.471,9.87-5.983,10.931-11.496c0.482-2.502,1.143-5.027,1.963-7.505     c7.315-22.083,26.629-36.92,48.06-36.92s40.744,14.837,48.06,36.92c0.821,2.48,1.482,5.006,1.964,7.505     c1.061,5.514,5.351,10.026,10.93,11.497c20.979,5.528,37.822,13.698,48.71,23.626c1.736,1.583,3.314,3.205,4.692,4.822     c3.311,3.888,4.04,9.174,1.905,13.796C417.548,145.598,413.082,148.451,408.016,148.451z M303.408,43.84     c-20.999,0-39.931,14.562-47.11,36.235c-0.807,2.437-1.457,4.92-1.93,7.38c-1.134,5.888-5.709,10.706-11.658,12.274     c-20.821,5.486-37.52,13.577-48.291,23.398c-1.708,1.557-3.257,3.149-4.604,4.731c-3.055,3.587-3.728,8.465-1.758,12.729     c1.956,4.233,6.073,6.863,10.745,6.863h209.215c4.672,0,8.79-2.63,10.745-6.864c1.97-4.264,1.296-9.142-1.759-12.729     c-1.35-1.585-2.899-3.177-4.604-4.731c-10.769-9.82-27.468-17.911-48.29-23.398c-5.949-1.567-10.525-6.385-11.658-12.274     c-0.473-2.457-1.122-4.939-1.931-7.379C343.339,58.401,324.407,43.84,303.408,43.84z"/>
      </g>
      <g>
        <path d="M303.408,109.265c11.941,0,21.622-9.68,21.622-21.622c0-2.723-0.509-5.326-1.427-7.726     c-3.111-8.125-10.978-13.896-20.196-13.896c-9.218,0-17.084,5.771-20.194,13.896c-0.918,2.399-1.427,5.003-1.427,7.726     C281.787,99.585,291.467,109.265,303.408,109.265z"/>
        <path d="M303.408,109.765c-12.197,0-22.121-9.924-22.123-22.122c0-2.713,0.491-5.373,1.46-7.904     c3.255-8.504,11.558-14.217,20.661-14.217c9.103,0,17.406,5.713,20.663,14.217c0.969,2.532,1.46,5.191,1.46,7.904     C325.53,99.841,315.606,109.765,303.408,109.765z M303.407,66.521c-8.691,0-16.619,5.455-19.728,13.575     c-0.925,2.417-1.394,4.956-1.394,7.547c0.001,11.646,9.477,21.122,21.123,21.122c11.646,0,21.122-9.475,21.122-21.122     c0-2.59-0.469-5.129-1.394-7.547C320.027,71.977,312.099,66.521,303.407,66.521z"/>
      </g>
      <g>
        <path d="M187.724,278.191H296.66c11.83,0,21.42-9.59,21.42-21.42c0-11.83-9.591-21.42-21.42-21.42H187.724     c-11.83,0-21.42,9.59-21.42,21.42C166.304,268.601,175.894,278.191,187.724,278.191z"/>
        <path d="M296.66,278.691H187.724c-12.087,0-21.92-9.833-21.92-21.92s9.833-21.92,21.92-21.92H296.66     c12.087,0,21.92,9.833,21.92,21.92S308.747,278.691,296.66,278.691z M187.724,235.851c-11.535,0-20.92,9.385-20.92,20.92     c0,11.535,9.385,20.92,20.92,20.92H296.66c11.536,0,20.92-9.385,20.92-20.92c0-11.536-9.385-20.92-20.92-20.92H187.724z"/>
      </g>
      <g>
        <path d="M419.094,350.871h-231.37c-11.83,0-21.42,9.59-21.42,21.42s9.59,21.42,21.42,21.42h231.37     c11.83,0,21.42-9.59,21.42-21.42S430.924,350.871,419.094,350.871z"/>
        <path d="M419.094,394.211h-231.37c-12.087,0-21.92-9.833-21.92-21.92s9.833-21.92,21.92-21.92h231.37     c12.087,0,21.92,9.833,21.92,21.92S431.181,394.211,419.094,394.211z M187.724,351.371c-11.535,0-20.92,9.385-20.92,20.92     s9.385,20.92,20.92,20.92h231.37c11.535,0,20.92-9.385,20.92-20.92s-9.385-20.92-20.92-20.92H187.724z"/>
      </g>
      <g>
        <path d="M352.891,466.855H187.724c-11.83,0-21.42,9.59-21.42,21.42s9.59,21.42,21.42,21.42h165.167     c11.83,0,21.42-9.59,21.42-21.42S364.721,466.855,352.891,466.855z"/>
        <path d="M352.891,510.195H187.724c-12.087,0-21.92-9.833-21.92-21.92s9.833-21.92,21.92-21.92h165.167     c12.087,0,21.92,9.833,21.92,21.92S364.978,510.195,352.891,510.195z M187.724,467.355c-11.535,0-20.92,9.385-20.92,20.92     s9.385,20.92,20.92,20.92h165.167c11.535,0,20.92-9.385,20.92-20.92s-9.385-20.92-20.92-20.92H187.724z"/>
      </g>
    </g>
  </g>
</svg>`;function displayLogoutMessage(a){a.innerHTML="Please log out and in again to copy token"}function displayTokenComponent(a,b){a.innerHTML=b,a.addEventListener("click",()=>{selectElementContents(a)});const c=document.createElement("div");c.classList.add("button"),c.addEventListener("click",async a=>{a.preventDefault(),a.stopPropagation();try{await copyTextToClipboard(b),createSnackbarItem("Successfully copied token")}catch(a){createSnackbarItem("Failed to copy token")}}),c.innerHTML=copySvgMarkup,a.appendChild(c)}export default function createTokenCopyField(a){const b=document.querySelector(a);if(b){const a=getCookie("CRAuth");return a?void displayTokenComponent(b,a):void displayLogoutMessage(b)}}