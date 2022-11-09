import React from 'react';
import * as styles from './Lorem.module.css'
const loremIpsumText = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. am dolor tortor, \
    placerat ac aliquam et, interdum at orci. Sed feugiat faucibus libero, in \
    tincidunt tellus fringilla ut. Mauris hendrerit, turpis quis semper commodo, \
    leo risus egestas lacus, a lobortis elit enim sed lorem. Fusce maximus sollicitudin \
    feugiat. Nunc elit dui, rhoncus non libero maximus, consectetur accumsan risus. \
    Suspendisse ultrices fermentum odio, et condimentum nisi euismod vitae. \
    Phasellus efficitur, leo quis varius iaculis, nisl mauris vestibulum turpis, pretium \
    elementum purus turpis eu libero",
    "Donec tristique, ligula maximus vulputate varius, enim tortor dapibus libero, sed elementum \
    libero enim eu ipsum. In facilisis metus eget arcu ultrices, ut blandit sapien pharetra. \
    Curabitur lacinia erat vitae convallis consequat. Vestibulum pretium ornare nibh a vehicula. \
    Curabitur egestas est sed lobortis aliquet. Nam eu feugiat arcu. Nam consectetur, odio vitae \
    mattis rutrum, magna lorem suscipit nisi, vel vehicula nisi nunc non mi. In congue, purus aliquam\
    scelerisque semper, metus ante imperdiet ipsum, ac aliquet nisl massa et nulla. Donec in leo urna. \
    Curabitur vitae euismod urna, ut interdum erat. Quisque mi dolor, dapibus eget eleifend eu, \
    suscipit ac purus. Integer sollicitudin viverra nisi in iaculis. Nam elementum ut justo non rutrum. \
    Aenean mattis est id euismod fringilla. Morbi vehicula elementum lorem, sed consequat nibh."
]
export default function LoremIpsum({words}) {
    const paras = loremIpsumText.reduce((acc, curr) => {
        if (acc[1] > 0) {
            let para = curr.split(" ").slice(0, words);
            let remW = Math.min(0, acc[1] - para.length)
            acc[0].push(para.join(" "))
            acc[1] = remW;
        }
        return acc;
    }, [[], words])[0]
    return paras.map(text => <p className={styles.lorem}>{text}</p>)
}