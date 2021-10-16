/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-16 23:28:36
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 23:31:30
 */
// 通过interface来定义索引类型
interface IndexLanguage {
  [index: number]: string;
}

const frontLanguage: IndexLanguage = {
  0: 'HTML',
  1: 'CSS',
  2: 'JavaScript',
  3: 'Vue',
};

interface ILanguageYear {
  [name: string]: number;
}

const languageYear: ILanguageYear = {
  C: 1972,
  Java: 1995,
  JavaScript: 1996,
  TypeScript: 2014,
};
