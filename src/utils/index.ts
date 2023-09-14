export enum translateTypeEnum {
  'hump' = '驼峰',
  'underLine' = '下划线',
  'strike' = '中划线',
  'constants' = '大写常量',
  // 'firstUpper'='每个单词首字母大写'
}
type TranslateType = keyof typeof translateTypeEnum;

export const translateTypeList:TranslateType[]=['hump', 'underLine', 'constants', 'strike'];


/**
 * @description: 初始化输入字符
 * @param {string} string
 * @return {*}
 */
function transString(string: string): string {
  if (!string) { return string; }  
  return string.replace(/([A_Z])/g, "_$1").toLowerCase().replace(/ /g,'').replace(/-/g, "_").replace(/_/g, " ");
}


/**
 * @description: 字符串list 转驼峰
 * @param {string} list
 * @return {*}
 */
function translateListToHump(list: string[]): string {
  if (list.length) {
    let res = '';
    list.forEach((item, index) => {
      if (index === 0) {
        res += item;
      } else {
        res += item.slice(0, 1).toUpperCase() + item.slice(1);
      }
    });
    return res;
  } else {
    return "";
  }
}

/**
 * @description: 字符串list 转下划线
 * @param {string} list
 * @return {*}
 */
function translateListToUnderLine(list: string[]): string {
  if (list.length) {
    let res = '';
    list.forEach((item, index) => {
      if (index === list.length - 1) {
        res += item;
      } else {
        res += item + '_';
      }
    });
    return res;
  } else {
    return "";
  }
}


/**
 * @description: 字符串list 转中划线
 * @param {string} list
 * @return {*}
 */
function translateListToStrike(list: string[]): string {
  if (list.length) {
    let res = '';
    list.forEach((item, index) => {
      console.log('translateListToStrike',list,item,index);
      
      if (index === list.length - 1) {
        res += item;
      } else {
        res += item + '-';
      }
    });
    return res;
  } else {
    return "";
  }
}

/**
 * @description: 字符串list 转大写常量
 * @param {string} list
 * @return {*}
 */
function translateListToConstants(list: string[]): string {
  if (list.length) {
    let res = '';
    list.forEach((item, index) => {
      if (index === list.length - 1) {
        res += item.toUpperCase();
      } else {
        res += item.toUpperCase() + '_';
      }
    });
    return res;
  } else {
    return "";
  }
}

/**
 * @description: 字符串list 转大写常量
 * @param {string} list
 * @return {*}
 */
function translateListToFirstUpper(list: string[]): string {
  if (list.length) {
    let res = '';
    list.forEach((item, index) => {
      if (index === list.length - 1) {
        res += item.toUpperCase();
      } else {
        res += item.toUpperCase() + '_';
      }
    });
    return res;
  } else {
    return "";
  }
}


function transStringByType(params: { type: TranslateType, int: string }): string {
  const { type, int } = params;
  if (!type || !int) { return ''; }
  const baseString = transString(int);  
  const baseStringList = baseString.split(' ');
  let resString = '';
  switch (type) {
    case 'hump':
      resString = translateListToHump(baseStringList);
      break;
    case 'underLine':
      resString = translateListToUnderLine(baseStringList);
      break;
    case 'strike':
      resString = translateListToStrike(baseStringList);
      break;
    case 'constants':
      resString = translateListToConstants(baseStringList);
      break;
    default:
      break;
  }
  return resString;
}

export {transStringByType};
