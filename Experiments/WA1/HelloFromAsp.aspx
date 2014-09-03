<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="HelloFromAsp.aspx.cs" Inherits="WA1.Hello2" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
        <h1>Hello World</h1>

        <ul>
        <%
            for (int i = 0; i < 10; i++)
            {
        %>      <li>
                <%=i %>
                </li>
        <%
            }
        %>
        </ul>

        <input id="name" runat="server" />

    </div>
    </form>
</body>
</html>
