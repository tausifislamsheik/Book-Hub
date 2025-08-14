import React, { useState, useEffect } from 'react';

const PagesToRead = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBooksData();
  }, []);

  const fetchBooksData = async () => {
    try {
      setLoading(true);
      const response = await fetch("booksData.json");
      if (!response.ok) {
        throw new Error('Failed to fetch books data');
      }
      const data = await response.json();
      setBooks(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      // Fallback to provided data if API fails
      setBooks([
        {
          "bookId": 1,
          "bookName": "The Great Gatsby",
          "author": "F. Scott Fitzgerald",
          "totalPages": 192
        },
        {
          "bookId": 2,
          "bookName": "To Kill a Mockingbird",
          "author": "Harper Lee",
          "totalPages": 281
        },
        {
          "bookId": 3,
          "bookName": "1984",
          "author": "George Orwell",
          "totalPages": 328
        },
        {
          "bookId": 4,
          "bookName": "The Catcher in the Rye",
          "author": "J.D. Salinger",
          "totalPages": 224
        },
        {
          "bookId": 5,
          "bookName": "Pride and Prejudice",
          "author": "Jane Austen",
          "totalPages": 279
        },
        {
          "bookId": 6,
          "bookName": "The Hobbit",
          "author": "J.R.R. Tolkien",
          "totalPages": 310
        },
        {
          "bookId": 7,
          "bookName": "Harry Potter and the Sorcerer's Stone",
          "author": "J.K. Rowling",
          "totalPages": 309
        },
        {
          "bookId": 8,
          "bookName": "The Alchemist",
          "author": "Paulo Coelho",
          "totalPages": 177
        },
        {
          "bookId": 9,
          "bookName": "The Girl on the Train",
          "author": "Paula Hawkins",
          "totalPages": 316
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const generateCurvedPyramidPath = (pages, maxPages, index) => {
    const colors = [
      '#3B82F6', // blue
      '#10B981', // emerald
      '#F59E0B', // amber
      '#F97316', // orange
      '#EF4444', // red
      '#8B5CF6', // violet
      '#06B6D4', // cyan
      '#84CC16', // lime
      '#F472B6'  // pink
    ];
    
    const color = colors[index % colors.length];
    const baseY = 420;
    const baseWidth = 90;
    const normalizedHeight = (pages / maxPages) * 300;
    const topY = baseY - normalizedHeight;
    
    // Create curved pyramid path using SVG path with quadratic curves
    const leftBaseX = -baseWidth/2;
    const rightBaseX = baseWidth/2;
    const midHeight = topY + (normalizedHeight * 0.3);
    
    const path = `
      M 0,${topY}
      Q ${-baseWidth/4},${midHeight} ${leftBaseX},${baseY}
      L ${rightBaseX},${baseY}
      Q ${baseWidth/4},${midHeight} 0,${topY}
      Z
    `;
    
    return { path, color, normalizedHeight, topY };
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading books data...</p>
        </div>
      </div>
    );
  }

  const maxPages = Math.max(...books.map(book => book.totalPages));
  const chartWidth = books.length * 150;

  return (
    <div className="min-h-screen bg-gray-50 mb-20">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-800">
              <span className="font-medium">Note:</span> Could not fetch from API ({error}). 
              Displaying sample data instead.
            </p>
          </div>
        )}
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Book Pages Chart
          </h2>
          <div className="overflow-x-auto">
            <div className="flex items-end justify-center space-x-8" style={{minWidth: `${chartWidth}px`}}>
              <svg width={chartWidth} height="500" className="mx-auto">
                {/* Y-axis labels */}
                {[0, 85, 170, 255, 340].map((value, i) => (
                  <g key={i}>
                    <text 
                      x="30" 
                      y={450 - (i * 85)} 
                      textAnchor="end" 
                      className="text-sm text-gray-500 font-medium"
                    >
                      {value.toString().padStart(2, '0')}
                    </text>
                    <line 
                      x1="40" 
                      y1={450 - (i * 85)} 
                      x2={chartWidth - 40} 
                      y2={450 - (i * 85)}
                      stroke="#f3f4f6" 
                      strokeWidth="1"
                    />
                  </g>
                ))}
                
                {/* Curved Pyramid shapes */}
                {books.map((book, index) => {
                  const x = 80 + (index * 150);
                  const shape = generateCurvedPyramidPath(book.totalPages, maxPages, index);
                  
                  return (
                    <g key={book.bookId} transform={`translate(${x}, 0)`}>
                      {/* Curved pyramid shape using path */}
                      <path
                        d={shape.path}
                        fill={shape.color}
                        fillOpacity="0.85"
                        className="drop-shadow-lg hover:fill-opacity-100 transition-all duration-300 cursor-pointer"
                      />
                      
                      {/* Page count label at the top */}
                      <text
                        x="0"
                        y={shape.topY - 8}
                        textAnchor="middle"
                        className="text-lg font-bold"
                        fill={shape.color}
                      >
                        {book.totalPages}
                      </text>
                      
                      {/* Book title at the bottom */}
                      <text
                        x="0"
                        y="445"
                        textAnchor="middle"
                        className="text-sm text-gray-600 font-medium"
                        style={{fontSize: '11px'}}
                      >
                        {book.bookName.length > 20 
                          ? book.bookName.substring(0, 20) + '...' 
                          : book.bookName
                        }
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>

        {/* Books Grid */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Book Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book, index) => {
              const colors = [
                'border-blue-500', 'border-emerald-500', 'border-amber-500', 
                'border-orange-500', 'border-red-500', 'border-violet-500',
                'border-cyan-500', 'border-lime-500', 'border-pink-500'
              ];
              const bgColors = [
                'bg-blue-50', 'bg-emerald-50', 'bg-amber-50', 
                'bg-orange-50', 'bg-red-50', 'bg-violet-50',
                'bg-cyan-50', 'bg-lime-50', 'bg-pink-50'
              ];
              
              return (
                <div 
                  key={book.bookId} 
                  className={`p-4 rounded-lg border-2 ${colors[index % colors.length]} ${bgColors[index % bgColors.length]} hover:shadow-md transition-shadow`}
                >
                  <h4 className="font-bold text-gray-900 mb-2">{book.bookName}</h4>
                  <p className="text-gray-600 text-sm mb-1">by {book.author}</p>
                  <p className="font-medium text-lg">{book.totalPages} pages</p>
                  {book.rating && (
                    <p className="text-yellow-600 text-sm mt-1">★ {book.rating}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PagesToRead;