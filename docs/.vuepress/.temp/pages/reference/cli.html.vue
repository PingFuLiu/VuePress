<template><div><h1 id="cli" tabindex="-1"><a class="header-anchor" href="#cli" aria-hidden="true">#</a> Cli</h1>
<h2 id="二级标题" tabindex="-1"><a class="header-anchor" href="#二级标题" aria-hidden="true">#</a> 二级标题</h2>
<h3 id="三级标题" tabindex="-1"><a class="header-anchor" href="#三级标题" aria-hidden="true">#</a> 三级标题</h3>
<h4 id="四级标题" tabindex="-1"><a class="header-anchor" href="#四级标题" aria-hidden="true">#</a> 四级标题</h4>
<h5 id="五级标题" tabindex="-1"><a class="header-anchor" href="#五级标题" aria-hidden="true">#</a> 五级标题</h5>
<h6 id="六级标题" tabindex="-1"><a class="header-anchor" href="#六级标题" aria-hidden="true">#</a> 六级标题</h6>
<h2 id="引用" tabindex="-1"><a class="header-anchor" href="#引用" aria-hidden="true">#</a> 引用</h2>
<blockquote>
<p>单行引用</p>
</blockquote>
<blockquote>
<p>start 多行引用（使用空&gt;强制换行）</p>
<p>end</p>
</blockquote>
<blockquote>
<p>嵌套引用1</p>
<blockquote>
<p>嵌套引用2</p>
<blockquote>
<p>嵌套引用3</p>
</blockquote>
</blockquote>
</blockquote>
<h2 id="列表" tabindex="-1"><a class="header-anchor" href="#列表" aria-hidden="true">#</a> 列表</h2>
<ol>
<li>有序列表1</li>
<li>有序列表2</li>
<li>有序列表3</li>
</ol>
<ul>
<li>无序列表1</li>
</ul>
<ul>
<li>无序列表2</li>
</ul>
<ul>
<li>无序列表3</li>
</ul>
<ul>
<li>嵌套列表
<ul>
<li>内层列表1</li>
<li>内层列表2</li>
</ul>
</li>
</ul>
<h2 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块" aria-hidden="true">#</a> 代码块</h2>
<p>使用```或者```javascript指定语言配置.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token comment">// 代码块</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="表格" tabindex="-1"><a class="header-anchor" href="#表格" aria-hidden="true">#</a> 表格</h2>
<p>: 代表对齐方式.</p>
<table>
<thead>
<tr>
<th style="text-align:center">表头1</th>
<th style="text-align:left">表头2</th>
<th style="text-align:right">表头3</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">居中</td>
<td style="text-align:left">左对齐</td>
<td style="text-align:right">右对齐</td>
</tr>
</tbody>
</table>
<h2 id="水平线" tabindex="-1"><a class="header-anchor" href="#水平线" aria-hidden="true">#</a> 水平线</h2>
<p>如果一行中只有三个以上的连字符, 星号, 或者下划线则会在该位置生成一个 hr 标签.</p>
<hr>
<hr>
<hr>
<h2 id="链接" tabindex="-1"><a class="header-anchor" href="#链接" aria-hidden="true">#</a> 链接</h2>
<p>This is <a href="http://www.baidu.com/" title="www.baidu.com" target="_blank" rel="noopener noreferrer">百度<ExternalLinkIcon/></a></p>
<h2 id="字体强调" tabindex="-1"><a class="header-anchor" href="#字体强调" aria-hidden="true">#</a> 字体强调</h2>
<p>普通文字<em>斜体文字</em>普通文字<br>
普通文字<strong>粗体文字</strong>普通文字<br>
普通文字<s>删除文字</s>普通文字</p>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<p>要输出一个代码片段, 需要使用重音符号 (`). 不同于预格式的代码块, 代码片段只是在普通段落中标识出代码.<br>
Use this <code v-pre>printf()</code> function</p>
<h2 id="图片" tabindex="-1"><a class="header-anchor" href="#图片" aria-hidden="true">#</a> 图片</h2>
<p><img src="/logo.png" alt="图片" title="图片"><br>
带链接的图片<br>
<a href="http://www.baidu.com" target="_blank" rel="noopener noreferrer"><img src="/logo.png" alt="链接" title="带链接的图片"><ExternalLinkIcon/></a></p>
<h2 id="自动链接" tabindex="-1"><a class="header-anchor" href="#自动链接" aria-hidden="true">#</a> 自动链接</h2>
<p>Markdown 支持一种 &quot;自动&quot; 创建 URL 和 email 地址链接的简短形式: 只需用尖括号包围 URL 或 email 地址即可.<br>
<a href="http://www.baidu.com" target="_blank" rel="noopener noreferrer">http://www.baidu.com<ExternalLinkIcon/></a></p>
<h2 id="反斜杠转义" tabindex="-1"><a class="header-anchor" href="#反斜杠转义" aria-hidden="true">#</a> 反斜杠转义</h2>
<p>Markdown 中可以使用反斜杠转义 Markdown 语法符号为字面量。Markdown 为下面字符提供反斜杠转义:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>\   backslash
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="复选框" tabindex="-1"><a class="header-anchor" href="#复选框" aria-hidden="true">#</a> 复选框</h2>
<ul>
<li>[ ] 没选中的复选框</li>
<li>[x] 选中复选框</li>
</ul>
<h2 id="语义标签" tabindex="-1"><a class="header-anchor" href="#语义标签" aria-hidden="true">#</a> 语义标签</h2>
<p><i>斜体</i><br>
<b>加粗</b><br>
<em>强调</em><br>
上<sup>标</sup><br>
下<sub>标</sub><br>
<kbd>键盘文本</kbd><br></p>
<h2 id="自定义容器" tabindex="-1"><a class="header-anchor" href="#自定义容器" aria-hidden="true">#</a> 自定义容器</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>这是一个提示</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>这是一个警告</p>
</div>
<div class="custom-container danger"><p class="custom-container-title">DANGER</p>
<p>这是一个危险警告</p>
</div>
<details class="custom-container details">
<p>这是一个 details 标签</p>
</details>
<h2 id="emoji" tabindex="-1"><a class="header-anchor" href="#emoji" aria-hidden="true">#</a> Emoji</h2>
<p>🎉🎉🎉
<a href="https://github.com/ikatyang/emoji-cheat-sheet" target="_blank" rel="noopener noreferrer">Emoji<ExternalLinkIcon/></a></p>
</div></template>
