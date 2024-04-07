import { toast } from 'react-toastify';
function truncate(str, maxLength) {
    return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
}

 function genSlice(str) {
     return str.slice(8, 99999);
 }
 function copyClip(text) {
     navigator.clipboard.writeText(text);
     toast.success('Text copied to clipboard', {
         position: 'top-right',
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: false,
         draggable: true,
         progress: undefined,
         theme: 'light',
     });
 }

export {
    truncate,
    genSlice,
    copyClip
};

