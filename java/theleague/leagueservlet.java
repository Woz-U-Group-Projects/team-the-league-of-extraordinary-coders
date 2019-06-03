package theleague;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/leagueservlet")
public class leagueservlet extends HttpServlet {

	private static final long serialVersionUID = 171634243620915496L;
	
	
	public void init() throws ServletException {
        super.init();
    }

    
    public void destroy() {
        super.destroy();
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("doPost was called.");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	String testHeaderID = request.getHeader("Test-Header");
    	String testHeaderResponse;

    	if(testHeaderID != null && !testHeaderID.isEmpty()) {
    	    testHeaderResponse = testHeaderID;
    	}else {
    	    testHeaderResponse = "nothing";
    	    
    	    response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
    	}

    	
    	String responseText = "You sent " + testHeaderResponse + " to the server. ";

    	// writes the text to the response.
    	response.getWriter().append(responseText);

        System.out.println("doGet was called.");
    }

    protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("doPut was called.");
    }

    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("doDelete was called.");
    }
    
}
