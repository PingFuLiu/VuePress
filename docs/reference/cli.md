---
next:
  text: Config
  link: /reference/config.md
---

# Cli
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

## 引用
> 单行引用

> start 多行引用（使用空>强制换行）
>
> end

> 嵌套引用1
>> 嵌套引用2
>>> 嵌套引用3

## 列表
1. 有序列表1
2. 有序列表2
3. 有序列表3

- 无序列表1
* 无序列表2
+ 无序列表3

- 嵌套列表
  + 内层列表1
  + 内层列表2

## 代码块
使用\```或者\```javascript指定语言配置.
```javascript
  // 代码块
  let a = 1;
  console.log(a);
```

## 表格
: 代表对齐方式.
|    表头1    |    表头2    |    表头3    |
|:----------:|:------------|------------:|
|     居中    |    左对齐   |    右对齐   |

## 水平线
如果一行中只有三个以上的连字符, 星号, 或者下划线则会在该位置生成一个 hr 标签.
***
---
___

## 链接
This is [百度](http://www.baidu.com/ "www.baidu.com")

## 字体强调
普通文字*斜体文字*普通文字<br>
普通文字**粗体文字**普通文字<br>
普通文字***斜体加粗***普通文字<br>
普通文字~~删除文字~~普通文字

## 代码
要输出一个代码片段, 需要使用重音符号 (\`). 不同于预格式的代码块, 代码片段只是在普通段落中标识出代码.<br>
Use this `printf()` function

## 图片
![图片](/logo.png "图片")<br>
带链接的图片<br>
[![链接](/logo.png "带链接的图片")](http://www.baidu.com)

## 自动链接
Markdown 支持一种 "自动" 创建 URL 和 email 地址链接的简短形式: 只需用尖括号包围 URL 或 email 地址即可.<br>
<http://www.baidu.com>

## 反斜杠转义
Markdown 中可以使用反斜杠转义 Markdown 语法符号为字面量。Markdown 为下面字符提供反斜杠转义:
```
\   backslash
`   backtick
*   asterisk
_   underscore
{}  curly braces
[]  square brackets
()  parentheses
#   hash mark
+   plus sign
-   minus sign (hyphen)
.   dot
!   exclamation mark
```

## 复选框
- [ ] 没选中的复选框
- [x] 选中复选框

## 语义标签
<i>斜体</i><br>
<b>加粗</b><br>
<em>强调</em><br>
上<sup>标</sup><br>
下<sub>标</sub><br>
<kbd>键盘文本</kbd><br>

## 自定义容器
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个 details 标签
:::

## Emoji
:tada::tada::tada:
[Emoji](https://github.com/ikatyang/emoji-cheat-sheet)
