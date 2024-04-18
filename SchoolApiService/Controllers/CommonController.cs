﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SchoolApp.DAL.SchoolContext;
using SchoolApp.Models.DataModels;


namespace SchoolApiService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommonController : ControllerBase
    {
        private readonly SchoolDbContext _context; 

        public CommonController(SchoolDbContext context)
        {
            _context = context;
        }

        // GET: api/Common/Frequency
        [HttpGet("Frequency")]
        public ActionResult<string[]> GetFrequency()
        {
            // Retrieve the enum values
            string[] frequencies = Enum.GetNames(typeof(Frequency));
            return Ok(frequencies);
        }

        [HttpGet("GetAllPaymentByStudentId/{studentId}")]
        public async Task<ActionResult<IEnumerable<MonthlyPayment>>> GetAllPaymentByStudentId(int studentId)
        {
            var payments = await _context.monthlyPayments
                .Include(p => p.PaymentDetails) // Include PaymentDetails
        .Include(p => p.paymentMonths) // Include paymentMonths
        .Where(p => p.StudentId == studentId)
                .ToListAsync();

            if (payments == null || payments.Count == 0)
            {
                return NotFound();
            }

            return payments;
        }




        // GET: api/Common/DueBalances
        [HttpGet("DueBalances")]
        public async Task<ActionResult<IEnumerable<DueBalance>>> GetDueBalances()
        {
            return await _context.dbsDueBalance.ToListAsync();
        }

        // GET: api/Common/DueBalances/5
        [HttpGet("DueBalances/{id}")]
        public async Task<ActionResult<DueBalance>> GetDueBalance(int id)
        {
            var dueBalance = await _context.dbsDueBalance.FindAsync(id);

            if (dueBalance == null)
            {
                return NotFound();
            }

            return dueBalance;
        }
    }
}
