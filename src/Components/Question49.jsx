import React, { useMemo, useState } from "react";

function AnalyticsDashboard() {
  const [dateRange, setDateRange] = useState("7");

  const analyticsData = [
    {
      date: "2026-09-01",
      revenue: 120000,
      users: 120,
      orders: 45,
    },
    {
      date: "2026-09-02",
      revenue: 95000,
      users: 98,
      orders: 38,
    },
    {
      date: "2026-09-03",
      revenue: 150000,
      users: 145,
      orders: 52,
    },
    {
      date: "2026-09-04",
      revenue: 180000,
      users: 170,
      orders: 67,
    },
    {
      date: "2026-09-05",
      revenue: 135000,
      users: 130,
      orders: 49,
    },
    {
      date: "2026-09-06",
      revenue: 210000,
      users: 195,
      orders: 78,
    },
    {
      date: "2026-09-07",
      revenue: 175000,
      users: 160,
      orders: 61,
    },
    {
      date: "2026-09-08",
      revenue: 225000,
      users: 210,
      orders: 85,
    },
    {
      date: "2026-09-09",
      revenue: 190000,
      users: 180,
      orders: 72,
    },
  ];

  const filteredData = useMemo(() => {
    if (dateRange === "all") {
      return analyticsData;
    }

    const numberOfDays = Number(dateRange);

    return analyticsData.slice(-numberOfDays);
  }, [dateRange]);

  const totalRevenue = useMemo(() => {
    return filteredData.reduce(
      (total, item) => total + item.revenue,
      0
    );
  }, [filteredData]);

  const totalUsers = useMemo(() => {
    return filteredData.reduce(
      (total, item) => total + item.users,
      0
    );
  }, [filteredData]);

  const totalOrders = useMemo(() => {
    return filteredData.reduce(
      (total, item) => total + item.orders,
      0
    );
  }, [filteredData]);

  const averageOrderValue = useMemo(() => {
    if (totalOrders === 0) {
      return 0;
    }

    return totalRevenue / totalOrders;
  }, [totalRevenue, totalOrders]);

  const conversionRate = useMemo(() => {
    if (totalUsers === 0) {
      return 0;
    }

    return (totalOrders / totalUsers) * 100;
  }, [totalOrders, totalUsers]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold">
              Analytics Dashboard
            </h1>

            <p className="mt-1 text-gray-500">
              Monitor your business performance
            </p>
          </div>

          <select
            value={dateRange}
            onChange={(event) =>
              setDateRange(event.target.value)
            }
            className="rounded-lg border bg-white px-4 py-3 outline-none focus:border-blue-500"
          >
            <option value="7">Last 7 days</option>
            <option value="3">Last 3 days</option>
            <option value="all">All time</option>
          </select>
        </div>

        {/* Summary Cards */}
        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          <StatCard
            title="Total Revenue"
            value={`₦${totalRevenue.toLocaleString()}`}
            description="Revenue generated"
          />

          <StatCard
            title="Total Users"
            value={totalUsers.toLocaleString()}
            description="Users recorded"
          />

          <StatCard
            title="Total Orders"
            value={totalOrders.toLocaleString()}
            description="Orders completed"
          />

          <StatCard
            title="Conversion Rate"
            value={`${conversionRate.toFixed(1)}%`}
            description="Orders / users"
          />

        </div>

        {/* Revenue Section */}
        <div className="mb-8 rounded-xl bg-white p-6 shadow">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">
                Revenue Overview
              </h2>

              <p className="text-sm text-gray-500">
                Revenue for selected period
              </p>
            </div>

            <span className="font-bold text-blue-600">
              ₦{totalRevenue.toLocaleString()}
            </span>
          </div>

          <div className="flex h-72 items-end gap-3 overflow-x-auto border-b border-l p-4">

            {filteredData.map((item) => {
              const maxRevenue = Math.max(
                ...filteredData.map(
                  (data) => data.revenue
                )
              );

              const height =
                (item.revenue / maxRevenue) * 100;

              return (
                <div
                  key={item.date}
                  className="flex h-full min-w-[50px] flex-1 flex-col justify-end"
                >
                  <div className="group relative flex h-full items-end">
                    <div
                      style={{
                        height: `${height}%`,
                      }}
                      className="w-full rounded-t-lg bg-blue-500 transition hover:bg-blue-600"
                    >
                      <div className="absolute -top-8 left-1/2 hidden -translate-x-1/2 rounded bg-gray-800 px-2 py-1 text-xs text-white group-hover:block">
                        ₦{item.revenue.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <p className="mt-2 text-center text-xs text-gray-500">
                    {item.date.slice(5)}
                  </p>
                </div>
              );
            })}

          </div>
        </div>

        {/* Performance Table */}
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-6 text-xl font-bold">
            Daily Performance
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left">
                  <th className="p-4">Date</th>
                  <th className="p-4">Revenue</th>
                  <th className="p-4">Users</th>
                  <th className="p-4">Orders</th>
                  <th className="p-4">Avg. Order</th>
                </tr>
              </thead>

              <tbody>
                {filteredData.map((item) => {
                  const averageOrder =
                    item.orders === 0
                      ? 0
                      : item.revenue / item.orders;

                  return (
                    <tr
                      key={item.date}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="p-4 font-semibold">
                        {item.date}
                      </td>

                      <td className="p-4">
                        ₦{item.revenue.toLocaleString()}
                      </td>

                      <td className="p-4">
                        {item.users}
                      </td>

                      <td className="p-4">
                        {item.orders}
                      </td>

                      <td className="p-4">
                        ₦{averageOrder.toLocaleString(
                          undefined,
                          {
                            maximumFractionDigits: 0,
                          }
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Overall Statistics */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">

          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="mb-4 text-xl font-bold">
              Average Order Value
            </h2>

            <p className="text-4xl font-bold text-green-600">
              ₦
              {averageOrderValue.toLocaleString(
                undefined,
                {
                  maximumFractionDigits: 0,
                }
              )}
            </p>

            <p className="mt-2 text-gray-500">
              Average amount spent per order
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="mb-4 text-xl font-bold">
              Total Activity
            </h2>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500">
                  Users
                </span>

                <span className="font-bold">
                  {totalUsers}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Orders
                </span>

                <span className="font-bold">
                  {totalOrders}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Conversion
                </span>

                <span className="font-bold">
                  {conversionRate.toFixed(1)}%
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, description }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <p className="text-sm font-medium text-gray-500">
        {title}
      </p>

      <p className="mt-2 text-3xl font-bold">
        {value}
      </p>

      <p className="mt-2 text-sm text-gray-500">
        {description}
      </p>
    </div>
  );
}

export default AnalyticsDashboard;